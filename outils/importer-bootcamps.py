# Convertit les pages formations validées (HTML) en données pour src/data/bootcamps.json.
import re, html, json, sys
U = sys.argv[1]
F = [('bootcamp-claude', '4154141c-2-capsule-page-bootcamp-claude-draft.html'),
     ('bootcamp-chatgpt', '5bda37ee-3-capsule-page-bootcamp-chatgpt-draft.html'),
     ('bootcamp-copilot', '8bd35427-12-capsule-page-bootcamp-copilot-draft.html'),
     ('cerveau-ia', '8d074c1c-9-capsule-page-cerveau-ia-draft.html')]
def t(x): return html.unescape(re.sub(r'<[^>]+>', '', x)).replace('\xa0', ' ').strip()
def clean(x):  # garde le balisage simple, retire les attributs de build
    x = re.sub(r'\s+data-astro-cid-\w+(="")?', '', x)
    return x.replace('https://www.capsuleia.fr/', '/').strip()
out = []
for slug, f in F:
    s = open(U + '/' + f).read()
    s = re.sub(r'\s+data-astro-cid-\w+(="")?', '', s)
    ld = json.loads(re.search(r'<script type="application/ld\+json">(.*?)</script>', s, re.S).group(1))
    course = next(g for g in ld['@graph'] if g['@type'] == 'Course' and '@id' in g)
    b = {'slug': slug}
    b['titre'] = html.unescape(re.search(r'<title>(.*?)</title>', s).group(1))
    mt = next((x for x in re.findall(r'<meta [^>]*>', s) if 'name="description"' in x), None)
    b['description'] = html.unescape(re.search(r'content="(.*?)"', mt).group(1)) if mt else None
    b['nom'] = course['name']; b['teaches'] = course.get('teaches', []); b['niveau'] = course.get('educationalLevel')
    b['instructeur'] = course.get('instructor'); b['audience'] = course.get('audience', {}).get('audienceType')
    hero = re.search(r'<section class="bc-hero".*?</section>', s, re.S).group(0)
    b['eyebrow'] = t(re.search(r'<p class="bc-eyebrow"[^>]*>(.*?)</p>', hero, re.S).group(1))
    h1 = re.search(r'<h1[^>]*>(.*?)</h1>', hero, re.S).group(1)
    b['kw'] = t(re.search(r'<span class="bc-kw"[^>]*>(.*?)</span>', h1, re.S).group(1))
    b['accroche'] = t(re.sub(r'<span class="bc-kw".*?</span>', '', h1, flags=re.S))
    b['sousTitre'] = t(re.search(r'<p class="bc-sous"[^>]*>(.*?)</p>', hero, re.S).group(1))
    b['puces'] = [[t(x), t(y)] for x, y in re.findall(r'<li[^>]*><b[^>]*>(.*?)</b>(.*?)</li>', re.search(r'<ul class="bc-puces".*?</ul>', hero, re.S).group(0), re.S)]
    b['actions'] = [[t(y), x.replace('https://www.capsuleia.fr', '')] for x, y in re.findall(r'<a class="bc-(?:btn|lien)" href="([^"]*)"[^>]*>(.*?)</a>', hero, re.S)]
    bca = re.search(r'<div [^>]*--bca-a:\s*([^";]+)[^>]*>.*?<span class="bca-title">(.*?)</span><span class="bca-logo">(.*?)</span></div>', hero, re.S)
    lines = json.loads(re.search(r'var LINES=(\[\[.*?\]\]);', s, re.S).group(1))
    b['demo'] = {'couleur': bca.group(1), 'titre': t(bca.group(2)), 'logo': bca.group(3).strip(), 'lignes': lines}
    bref = re.search(r'<section class="bc-bref".*?</section>', s, re.S).group(0)
    b['bref'] = t(re.search(r'<p class="bc-resume"[^>]*>(.*?)</p>', bref, re.S).group(1))
    b['objectifGlobal'] = t(re.sub(r'<strong.*?</strong>', '', re.search(r'<p class="bc-global"[^>]*>(.*?)</p>', bref, re.S).group(1), flags=re.S))
    b['fiche'] = [[t(x), t(y)] for x, y in re.findall(r'<dt[^>]*>(.*?)</dt><dd[^>]*>(.*?)</dd>', bref, re.S)]
    obj = re.search(r'<section class="bc-sec bc-obj".*?</section>', s, re.S).group(0)
    b['objTitre'] = clean(re.search(r'<h2[^>]*>(.*?)</h2>', obj, re.S).group(1))
    b['objectifs'] = [t(x) for x in re.findall(r'<li[^>]*><b[^>]*>.*?</b><p[^>]*>(.*?)</p></li>', obj, re.S)]
    prog = re.search(r'<section class="bc-sec bc-prog".*?</section>', s, re.S).group(0)
    b['progTitre'] = clean(re.search(r'<h2[^>]*>(.*?)</h2>', prog, re.S).group(1))
    b['progLead'] = t(re.search(r'<p class="bc-lead"[^>]*>(.*?)</p>', prog, re.S).group(1))
    b['blocs'] = []
    for bl in re.findall(r'<div class="bc-bloc"[^>]*>(.*?)</div>(?=<div class="bc-bloc"|</div></section>)', prog, re.S):
        h3 = re.search(r'<h3[^>]*>(.*?)<small[^>]*>(.*?)</small></h3>', bl, re.S)
        se = []
        for d in re.findall(r'<details class="bc-seance".*?</details>', bl, re.S):
            sm = re.search(r'<summary[^>]*><b[^>]*>(.*?)</b><span[^>]*>(.*?)</span><i[^>]*>(.*?)</i></summary>', d, re.S)
            ps = re.findall(r'<p[^>]*><strong[^>]*>(.*?)</strong>(.*?)</p>', d, re.S)
            se.append({'num': t(sm.group(1)), 'titre': t(sm.group(2)), 'duree': t(sm.group(3)), 'points': [[t(a), t(c)] for a, c in ps]})
        b['blocs'].append({'nom': t(h3.group(1)), 'duree': t(h3.group(2)), 'seances': se})
    prat = re.search(r'<section class="bc-sec bc-prat".*?</section>', s, re.S).group(0)
    eb = [t(x) for x in re.findall(r'<p class="bc-eyebrow bc-eyebrow--m"[^>]*>(.*?)</p>', prat, re.S)]
    h2 = [clean(x) for x in re.findall(r'<h2[^>]*>(.*?)</h2>', prat, re.S)]
    b['prat'] = {'eyebrows': eb, 'titres': h2}
    b['prerequis'] = [t(x) for x in re.findall(r'<li[^>]*>(.*?)</li>', re.search(r'<ul class="bc-check".*?</ul>', prat, re.S).group(0), re.S)]
    b['evaluation'] = [[t(x), t(y)] for x, y in re.findall(r'<dt[^>]*>(.*?)</dt><dd[^>]*>(.*?)</dd>', prat, re.S)]
    resp = re.search(r'<section class="bc-sec bc-resp".*?</section>', s, re.S).group(0)
    b['resp'] = {'eyebrow': t(re.search(r'<p class="bc-eyebrow"[^>]*>(.*?)</p>', resp, re.S).group(1)), 'titre': clean(re.search(r'<h2[^>]*>(.*?)</h2>', resp, re.S).group(1)), 'lead': t(re.search(r'<p class="bc-lead"[^>]*>(.*?)</p>', resp, re.S).group(1))}
    b['usageResponsable'] = [[t(x), t(y)] for x, y in re.findall(r'<li[^>]*><h3[^>]*>(.*?)</h3><p[^>]*>(.*?)</p></li>', resp, re.S)]
    form = re.search(r'<section class="bc-sec bc-form".*?</section>', s, re.S).group(0)
    imgtag = re.search(r'<img [^>]*>', form).group(0)
    img = re.search(r'src="([^"]+)"', imgtag)
    ps = re.findall(r'<p(?: class="([^"]*)")?[^>]*>(.*?)</p>', form, re.S)
    b['formateur'] = {'photo': img.group(1).replace('https://www.capsuleia.fr', ''), 'nom': t(re.search(r'<h2[^>]*>(.*?)</h2>', form, re.S).group(1)),
                      'label': t(next(y for x, y in ps if x and 'bc-eyebrow' in x)), 'role': t(next(y for x, y in ps if x == 'bc-role')), 'bio': t(next(y for x, y in ps if not x))}
    faq = re.search(r'<section class="bc-sec bc-faq".*?</section>', s, re.S).group(0)
    b['faqTitre'] = clean(re.search(r'<h2[^>]*>(.*?)</h2>', faq, re.S).group(1)).replace('\xa0', '&nbsp;')
    b['faq'] = [{'q': t(x), 'r': t(y)} for x, y in re.findall(r'<summary[^>]*>(.*?)</summary><p[^>]*>(.*?)</p>', faq, re.S)]
    b['autres'] = [clean(x) for x in re.findall(r'<p class="bc-autre"[^>]*>(.*?)</p>', faq, re.S)]
    out.append(b)
    print(slug, '|', b['eyebrow'], '|', b['kw'], '|', b['accroche'], '| puces', b['puces'], '| blocs', [(x['nom'], len(x['seances'])) for x in b['blocs']], '| faq', len(b['faq']), '| prereq', len(b['prerequis']), '| eval', len(b['evaluation']), '| regles', len(b['usageResponsable']), '| form', b['formateur']['label'], b['formateur']['nom'], '| autres', len(b['autres']), '| obj', len(b['objectifs']), '| desc', bool(b['description']), '| actions', b['actions'])
json.dump(out, open('src/data/bootcamps.json', 'w'), ensure_ascii=False, indent=1)
