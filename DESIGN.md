---
name: Sinan-Deniz Çeviker
description: The career as a controller's position, a live radar scope over a rack of paper flight strips.
colors:
  glass: "#1b2026"
  glass-deep: "#161b20"
  panel: "#222931"
  panel-2: "#2a323b"
  rack: "#14181d"
  rule: "#36404a"
  ring: "#4a5663"
  ink: "#e8edf2"
  ink-2: "#a3afbb"
  ink-3: "#8592a0"
  track: "#5ad1a8"
  amber: "#f2c14e"
  amber-hover: "#f7d27a"
  amber-ink: "#1d1708"
  strip-role: "#cfe0ef"
  strip-project: "#cfe8d6"
  strip-competition: "#f4cfbf"
  strip-education: "#eee2a4"
  strip-ink: "#12161a"
  strip-ink-2: "#3a434c"
typography:
  display:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, min(5.2vw, 8.5svh), 4.5rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.625
  body-sm:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
  data:
    fontFamily: "B612 Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.02em"
    fontFeature: "tnum"
  data-callsign:
    fontFamily: "B612 Mono, ui-monospace, monospace"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.02em"
rounded:
  none: "0px"
  scope: "9999px"
spacing:
  gutter: "16px"
  gutter-sm: "24px"
  strip-gap: "10px"
  section: "80px"
  section-md: "112px"
  container: "1360px"
  hit: "44px"
components:
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.amber-ink}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.amber-hover}"
  button-primary-compact:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.amber-ink}"
    rounded: "{rounded.none}"
    padding: "0 12px"
    height: "36px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-control:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.none}"
    size: "44px"
  readout-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 16px"
  flight-strip-role:
    backgroundColor: "{colors.strip-role}"
    textColor: "{colors.strip-ink}"
    rounded: "{rounded.none}"
    padding: "16px"
  flight-strip-project:
    backgroundColor: "{colors.strip-project}"
    textColor: "{colors.strip-ink}"
    rounded: "{rounded.none}"
    padding: "16px"
  flight-strip-competition:
    backgroundColor: "{colors.strip-competition}"
    textColor: "{colors.strip-ink}"
    rounded: "{rounded.none}"
    padding: "16px"
  flight-strip-education:
    backgroundColor: "{colors.strip-education}"
    textColor: "{colors.strip-ink}"
    rounded: "{rounded.none}"
    padding: "16px"
  data-tag:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.ink}"
    typography: "{typography.data}"
    rounded: "{rounded.none}"
    padding: "6px 10px"
  status-strip:
    backgroundColor: "{colors.rack}"
    textColor: "{colors.ink-2}"
    height: "56px"
---

# Design System: Sinan-Deniz Çeviker

## Overview

**Creative North Star: "The Controller's Position"**

The site is an air-traffic-control workstation. A slate radar scope is the hero instrument: crisp, unglowing range rings that mark years, a rotating sweep, and blips for every role, project, competition and degree, each carrying a monospaced data tag on a leader line. Below the scope, the record sits in a strip rack: paper flight strips, banded by kind, laid on a dark rail. Everything reads like equipment someone works at, never like a brochure.

The palette is dark and instrumental. Slate glass and its panels carry the world, track green marks live data, and amber is reserved for the one thing the controller has locked and the one action the visitor should take (the CV). The only light surfaces are the paper strips, so they read as physical objects set into the console. Density is high in the instruments and generous between sections: the hero fills the first viewport, then each section opens with wide vertical air.

Type splits words from data. Atkinson Hyperlegible Next sets every sentence, heading and name. B612 Mono, the cockpit display face, sets only ASCII data: callsigns, bearings, times, periods, counts. Shape carries meaning alongside colour: square for roles, circle for projects, diamond for competitions, triangle for education, everywhere a kind appears.

**Key Characteristics:**
- Slate glass ground (#1b2026) with flat tonal panels; square corners everywhere except the round scope.
- Track green for live tracks and data codes; amber only for lock, focus, selection and the primary action.
- Paper flight strips in four kind colours on a ruled rack, the only light surfaces.
- B612 Mono for ASCII data, Atkinson Hyperlegible Next for words.
- Kind symbols (square, circle, diamond, triangle) pair with every kind colour.
- Reduced motion stops the sweep and lights every track.

## Colors

A dark slate console with one live green, one amber for what is locked or wanted, and four pale paper colours for the strips.

### Primary
- **Lock Amber** (amber): the locked target box, the locked callsign and leader line, the primary Download CV buttons, the active language, focus outlines, text selection, and link underlines on hover. Hover deepens toward **Pale Amber** (amber-hover). Text on amber is always **Amber Ink** (amber-ink).

### Secondary
- **Track Green** (track): unlocked blips, the sweep wedge and leading edge, the station code in the status strip, kind symbols on dark ground, capability codes, contact channel labels, and drawn track lines in work art.

### Tertiary
- **Role Paper** (strip-role), **Project Paper** (strip-project), **Competition Paper** (strip-competition), **Education Paper** (strip-education): the background of a flight strip, chosen strictly by its kind. Text on paper is **Strip Ink** (strip-ink) and **Strip Ink Soft** (strip-ink-2); internal column rules are strip-ink at 20%.

### Neutral
- **Slate Glass** (glass): the page ground, the browser theme colour, the background of data tags pinned to work visuals.
- **Deep Glass** (glass-deep): the scope disc and the well behind work images and drawn art.
- **Console Panel** (panel): the locked-target readout and the contact list.
- **Raised Panel** (panel-2): capability rows and filled boxes inside drawings.
- **Rack** (rack): the status strip, the footer, and the strip rack and tools sections under their rails.
- **Rule** (rule): every 1px border and divider, scope crosshairs, the outer scope bezel.
- **Ring** (ring): range rings, bearing ticks, outline-button borders, drawing strokes, scrollbar thumb.
- **Ink** (ink), **Ink Soft** (ink-2), **Ink Faint** (ink-3): primary text, secondary text and ledes, then meta text, field labels, bearing numbers and resting leader lines.

### Named Rules
**The Lock Rule.** Amber means locked or wanted: the locked target, focus, selection, and the CV. Never decorate with it.

**The Paper Rule.** Light surfaces exist only as flight strips, and a strip's colour is decided by its kind, never by taste.

**The Shape-With-Colour Rule.** A kind colour never appears without its kind symbol; colour is never the only signal.

## Typography

**Body Font:** Atkinson Hyperlegible Next (with ui-sans-serif, system-ui, sans-serif), loaded with latin and latin-ext.
**Display Font:** the same family at weight 800.
**Data Font:** B612 Mono (with ui-monospace, monospace), weights 400 and 700, latin subset only.

**Character:** a legibility-first humanist sans for everything a person reads, against an avionics mono for everything an instrument reports. The contrast between them is the world's voice.

### Hierarchy
- **Display** (800, clamp(2.5rem, min(5.2vw, 8.5svh), 4.5rem), 0.92, -0.035em): the name in the hero only. The height clamp keeps the hero inside short laptop viewports.
- **Headline** (800, 1.875rem mobile to 3rem desktop, -0.02em): section titles; smaller sections step to 2.25rem. The contact close goes to 3rem/4.5rem at -0.03em.
- **Title** (700, 1.5rem to 1.875rem, -0.01em): work item titles; the hero role line uses 600 at 1.25rem to 1.5rem.
- **Body** (400, 17px hero lede, 1.125rem section ledes, 1.625): ledes in Ink Soft, capped at 44 to 60ch.
- **Body Small** (400, 15px): strip details, readout fields, organisation lines.
- **Label** (600, 0.875rem): readout header, rack group titles, links in instruments.
- **Data** (B612 Mono, 10px to 13px for tags and bearings, 1.25rem to 1.5rem bold for callsigns, tabular numerals, 0.02em tracking).

### Named Rules
**The ASCII Data Rule.** B612 Mono sets only ASCII data: callsigns, bearings, times, periods, codes, counts, language codes. Its subset has no Romanian ș, ț, ă, â, î, so any localised word goes in Atkinson. If a string can be translated, it is not data.

**The Words Are Hyperlegible Rule.** Headings, names, ledes and every sentence are Atkinson Hyperlegible Next; headings balance, paragraphs wrap pretty.

## Layout

A single 1360px container (16px gutters, 24px from sm) holds every section. The hero is a two-column grid at lg, 38fr text and readout on the left against 62fr scope on the right, filling the viewport below the 56px status strip; under 820px of height it tightens its gaps and swaps the readout's field list for one line. On mobile the scope comes first, then the readout, then the name block.

Sections alternate between bare glass and rack (ruled rail background) with a 1px rule at each boundary, and open with 80px vertical padding, 112px from md. Strips and capability rows stack with a tight 10px gap; strips become a four-column grid at md (callsign and kind, role and organisation, period, result and details) with internal rules. Work items are full-width rows divided by rules, image left at 22rem. Every interactive target is at least 44px.

## Elevation & Depth

Depth is tonal, not lifted: glass, deep glass, panel and raised panel stack in small lightness steps, separated by 1px rules. The only shadow belongs to objects that sit on the rack, the paper strips and capability rows, which cast a short, soft drop as if slotted onto the rail. The scope does not glow; its sweep is a faint green conic wedge with a brighter leading edge.

### Shadow Vocabulary
- **Rack Drop** (`box-shadow: 0 6px 14px -8px rgb(0 0 0 / 0.7)`): strips and capability rows on a rack section only.

### Named Rules
**The Unglowing Glass Rule.** Rings, ticks and crosshairs are crisp hairlines in ring and rule colours. No bloom, no phosphor glow, no blur on the scope.

## Shapes

Square corners everywhere: buttons, panels, strips, tags, image wells. The round scope (rounded full) is the single curved form, and phone screenshots inside work wells keep their device corner (14px) because that is the object's shape. Borders are 1px in rule or ring; the locked target box is a 1.5px amber square. Kind symbols are filled geometric glyphs on a 16-unit grid: square (role), circle (project), diamond (competition), triangle (education). The rack carries 1px rails every 12px at white 5%.

## Components

### Buttons
Instrument switches: flat, square, bold.
- **Shape:** square (0px).
- **Primary:** Lock Amber with Amber Ink, bold, 48px tall with 20px sides, a 16px download icon and a mono "PDF" meta at 70% opacity. A 36px compact version lives in the status strip.
- **Hover / Focus:** background shifts to Pale Amber; focus is a 2px amber outline at 3px offset, site-wide.
- **Outline:** transparent with a Ring border and Ink text; border goes to Ink on hover.
- **Control:** 44px square, Rule border, Ink Soft icon that brightens on hover; paired controls share a border. The sweep toggle is the same family with a label.

### Flight Strips
The record's signature. A paper strip in its kind colour, Strip Ink text, Rack Drop shadow. First column: the callsign in bold mono and the kind as a small uppercase label with its symbol. Then role and organisation, period, and the result in semibold over details. Links underline at strip-ink 40% and darken on hover. Active strips sit on the upper rail, completed ones below, newest first.

### Cards / Containers
- **Corner Style:** square.
- **Background:** Console Panel for the readout and contact list; Raised Panel for capability rows.
- **Shadow Strategy:** none, except capability rows on the rack (Rack Drop).
- **Border:** 1px Rule outline with Rule dividers between header, rows and footer.
- **Internal Padding:** 16px sides, 10px to 16px vertical.

### Navigation
- **Status strip:** a 56px Rack bar with a 1px rule: the mono name mark, the green station code with local time, the EN/RO switch, and the compact amber CV.
- **Language switch:** mono codes in 44px cells; the current language is amber, others Ink Faint and brighten to Ink on hover.

### Radar Scope (signature)
A square, round-clipped instrument on Deep Glass: an outer bezel ring, a full-range ring, dashed range rings labelled by year, crosshairs, 5-degree ticks with long ticks every 30, mono bearing labels (000 to 330) outside the rim. Blips are kind symbols in Track Green that brighten as the 6s sweep passes and decay; the locked blip turns amber inside a 28px amber target box that scales in from 150% with the expo-out ease. Each blip carries a data tag on a leader line (callsign bold, period code below), flipped to the left near the right edge. Hover, focus or tap locks; arrow keys cycle. A caption and Hold sweep toggle sit below. Reduced motion holds the sweep and lights every track.

### Locked-Target Readout
A Console Panel with a header row (label and a mono status line: state, track count, locked callsign), the callsign large in amber mono, the kind with its symbol, a field list (role, organisation, period), the result in semibold, then links and previous/next controls. It is a live region.

### Data Tag
A callsign label pinned to the top-left corner of a work visual: Slate Glass background, Rule border on its right and bottom edges, green kind symbol and bold mono callsign that turns amber when its row is hovered.

## Do's and Don'ts

### Do:
- **Do** keep amber for the locked target, focus, selection and the CV download, with Amber Ink (#1d1708) on it.
- **Do** colour a strip by its kind and pair every kind colour with its symbol: square role, circle project, diamond competition, triangle education.
- **Do** set callsigns, bearings, times, periods and codes in B612 Mono with tabular numerals; set every translatable word in Atkinson Hyperlegible Next.
- **Do** separate surfaces with 1px Rule borders and tonal steps; reserve the Rack Drop shadow for objects on a rack.
- **Do** keep every target at least 44px and give every animated instrument a held, fully-lit reduced-motion state.
- **Do** draw illustrations for work without screenshots in the scope's own vector language: Deep Glass ground, dashed Ring arcs, Track Green lines, mono labels.

### Don't:
- **Don't** put Romanian or any localised string in B612 Mono; its subset drops ș, ț, ă, â, î.
- **Don't** add glow, bloom or blur to the scope or its rings.
- **Don't** round panels, buttons or strips; the scope is the only round form.
- **Don't** introduce light surfaces other than the four strip papers.
- **Don't** use amber as decoration, a section accent or a second highlight colour.
