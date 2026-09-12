Reusable UI Theme Specification
1. Overall Design Style

Design direction:

Modern, premium SaaS
Minimal and clean
Professional / enterprise
Security-focused
Lots of whitespace
Flat, subtle UI rather than heavy gradients
Soft off-white backgrounds
Dark typography
Deep green accent
Thin borders
Subtle shadows
Rounded corners, but not overly rounded

Visual feeling:

"Minimal enterprise SaaS with a premium, trustworthy, technical aesthetic."

2. Color Palette

These are the main colors used throughout the page.

Purpose	Color	Hex
Main page background	Warm off-white	#FAF8F3
Card / surface	White	#FFFFFF
Primary text	Near-black	#1C1C1A
Secondary text	Warm gray	#57564F
Muted text	Gray	#8A887F
Borders	Light warm gray	#E5E2D9
Very subtle border	Extra-light beige	#EEEBE2
Primary accent	Deep green	#1F4B44
Accent dark / hover	Dark green	#163832
Accent light background	Pale green	#EAF0EE
Secondary section background	Warm beige	#F5F2EA
Color hierarchy
Background
#FAF8F3

Surface / Cards
#FFFFFF

Primary Text
#1C1C1A

Secondary Text
#57564F

Muted Text
#8A887F

Borders
#E5E2D9

Primary Accent
#1F4B44

Accent Hover
#163832

Accent Background
#EAF0EE
3. Typography

The page uses two main fonts:

Primary body font

Inter

The overall application wrapper uses:

font-family: Inter, sans-serif;

Use Inter for:

Body text
Navigation
Buttons
Descriptions
Labels
General UI
Heading / brand font

Manrope

Headings and important brand elements use:

font-family: Manrope, sans-serif;

Use Manrope for:

Logo / brand name
H1
H2
H3
Important values
Strong product labels
Font hierarchy
Element	Font	Weight	Approx. Size
H1	Manrope	800	42–54px
H2	Manrope	700	28–34px
H3	Manrope	700	16–18px
Body	Inter	400	14–17px
Navigation	Inter	400	14–15px
Button	Inter	500	14–15px
Small text	Inter	400	12–14px
Technical values	Mono	400	10–13px

The H1, for example, uses font-extrabold, tight tracking, and a responsive size from roughly 42px to 54px.

4. Border Style

The UI heavily relies on thin, subtle borders rather than strong shadows.

Primary border:

border: 1px solid #E5E2D9;

Very subtle border:

border: 1px solid #EEEBE2;

Typical sections have:

border-bottom: 1px solid #E5E2D9;

This creates the clean horizontal separation between sections.

Rule

Avoid:

Thick borders
Black borders everywhere
Highly saturated borders

Prefer:

#E5E2D9
#EEEBE2
1px borders
5. Border Radius

The design uses moderate rounding.

Typical values:

rounded-md  → 6px
rounded-lg  → 8px
rounded-xl  → 12px

Examples from the code include cards using rounded-xl, inner components using rounded-lg, and buttons using rounded-md.

Design rule

Don't use excessive:

rounded-full

for normal UI components.

Use rounded-full primarily for:

circular icons
status indicators
special architecture diagrams
6. Shadows

Shadows are very subtle.

Example:

shadow-[0_1px_3px_rgba(28,28,26,0.06)]

and:

shadow-sm

Shadow philosophy

Use:

Very subtle
Low opacity
Small blur
Minimal elevation

Avoid:

Large shadows
Strong floating cards
Heavy glow effects
7. Buttons

There are three button variants.

Primary
Background: #1C1C1A
Text: #FAF8F3
Hover: #163832
Radius: 6px
Font: Inter
Weight: 500

The important detail is that the primary CTA is almost black, not green.

Green is used more as a brand/accent color.

Secondary
Background: white
Text: #1C1C1A
Border: #E5E2D9
Hover border: #1C1C1A
Ghost
Text: #57564F
Hover: #1C1C1A
No strong background
8. Icons

The code uses Lucide icons.

Style:

Thin line icons
strokeWidth ≈ 1.75
Usually 16–20px

Examples:

Lock
Shield
Network
Server
Upload
Download
User
Database

Icons normally use:

#1F4B44

or:

#57564F

rather than black.

9. Cards

Card design:

Background: #FFFFFF
Border: #E5E2D9
Radius: 8–12px
Shadow: very subtle
Padding: 24–28px

Example from the visualization component: white surface, subtle border, rounded-xl, and a very light shadow.

Card philosophy

Cards should feel:

"Structured and calm, not floating."

So avoid:

Strong drop shadows
Gradients
Glassmorphism
Excessive decoration
10. Layout

The main content uses a maximum width around:

1240px

Example:

max-w-[1240px]

Desktop
Max width: 1240px
Horizontal padding: 32px
Large vertical spacing
2-column layouts where appropriate
Mobile

The code uses:

px-5

with responsive breakpoints:

sm
md
lg

Navigation becomes a hamburger menu on mobile.

11. Spacing

The design has generous whitespace.

Typical section spacing:

Mobile: 56–64px
Tablet: 64–80px
Desktop: 80–112px

For example, sections use combinations such as:

py-16
sm:py-20
lg:py-28

General rule

Don't make the UI dense.

Prefer:

Heading
↓
12–24px
↓
Description
↓
24–36px
↓
CTA / content
12. Section Design

The page alternates between:

#FAF8F3
#FFFFFF
#FAF8F3
#FFFFFF
#F5F2EA

This creates visual separation without needing decorative elements.

For example, the Trust section uses white, while the Security section uses #F5F2EA.

13. Navigation

Navbar:

Height: 64px
Background: #FAF8F3 with slight transparency
Bottom border: #E5E2D9
Sticky at top
Backdrop blur

Navigation links:

14.5px
Inter
#57564F
Hover → #1C1C1A
14. Logo / Brand

Logo consists of:

Deep green square
↓
White line icon
↓
Manrope bold brand name

Logo icon background:

#1F4B44

Logo text:

#1C1C1A
Manrope
17px
Bold

15. Special Technical Text

For things such as:

project.zip
24.8 MB
local
FILE
ENCRYPTED
STORAGE NODES
us-east
eu-west

the design uses monospace typography.

Example:

font-mono

This is useful for:

IDs
filenames
technical values
system states
infrastructure labels
code-like information
16. Overall UI Rules

If you want another page generated using exactly this theme, give the AI these rules:

DESIGN SYSTEM

Style:
Modern premium enterprise SaaS.
Minimal, clean, technical, trustworthy and security-focused.
Use generous whitespace and a calm visual hierarchy.
Avoid gradients, glassmorphism, excessive shadows and overly decorative UI.

COLORS:
Background: #FAF8F3
Surface: #FFFFFF
Primary text: #1C1C1A
Secondary text: #57564F
Muted text: #8A887F
Border: #E5E2D9
Subtle border: #EEEBE2
Primary accent: #1F4B44
Accent dark / hover: #163832
Accent light background: #EAF0EE
Secondary beige section: #F5F2EA

TYPOGRAPHY:
Body: Inter, sans-serif
Headings: Manrope, sans-serif
Technical/system text: monospace

HEADINGS:
Manrope
Bold / Extra-bold
Tight letter spacing
Dark #1C1C1A

BODY:
Inter
Regular
#57564F
Line-height around 1.6

BUTTONS:
Primary:
#1C1C1A background
#FAF8F3 text
Hover #163832

Secondary:
White background
#E5E2D9 border
#1C1C1A text

Ghost:
#57564F text
Hover #1C1C1A

BORDERS:
1px
#E5E2D9
Use borders heavily for structure.

RADIUS:
Buttons: 6px
Inputs: 6–8px
Cards: 8–12px
Avoid excessive rounded-full components.

SHADOWS:
Very subtle only.
Prefer shadow-sm or 0 1px 3px with very low opacity.

ICONS:
Use Lucide-style outline icons.
Stroke width around 1.75.
Icon size 16–20px.
Primary icon color #1F4B44.

LAYOUT:
Maximum content width: 1240px.
Desktop horizontal padding: 32px.
Mobile horizontal padding: 20px.
Generous vertical section spacing.
Fully responsive.

SECTIONS:
Alternate #FAF8F3 and #FFFFFF backgrounds.
Use #F5F2EA for highlighted sections.
Separate sections with 1px #E5E2D9 borders.

VISUAL LANGUAGE:
Minimal.
Editorial.
Premium.
Enterprise.
Technical.
Trustworthy.
No unnecessary decoration.