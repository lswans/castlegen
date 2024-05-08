# Castlegen: A Dungeon Master's Companion Tool

This tool will generate information describing a fantasy setting for your creative purposes
(intended for Dungeons and Dragons). Users can provide input like town size, environment, and
dominant population (from a list), and immediately get a template for a town.

# Update History
## 5/7/2024
- Added randomly generated populations configured by inputs
- Added primary "districts" (industries supporting the town). A
- Added handling of optional secondary flags like "requirescholars".
- Hid the Place object (containing data describing the place being generated) until 
the "Generate" button is clicked.

## 5/5/2024
First push: 
- added intake fields (primary and secondary flags).
- set up processCity.js to calculate population.
- connected "Generate" button to backend.

## 5/4/2024
Project initialized.
