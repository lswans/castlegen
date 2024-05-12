# Castlegen: A Dungeon Master's Companion Tool

This tool will generate information describing a fantasy setting for your creative purposes
(intended for Dungeons and Dragons). Users can provide input like town size, environment, and
dominant population (from a list), and immediately get a template for a town.

# Update History
## 5/12/2024
- Added first functionality for ChatGPT integration. Will soon upgrade to include input from user.
    - Send requests to gpt-3.5-turbo to retrieve unique description of Place components ('Farming District', 'Scholar's Residence', etc.)
## 5/9/2024
- Added helper functions for generating sets of random numbers.
- Added fully randomized population percentages (setting "Dominant Population" to "Random").
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