# pccs_ts_firing_range
https://pccs-shooting.herokuapp.com/

### Purpose
An exercise in TDD/BDD'ing out a TypeScript App.<br>
Also exploring future possible feature for [my Phoenix Command project](https://github.com/mp40/PCCS-Helper)

### What does it do?
The app calculates hit probability for shooting in the Phoenix Command Combat System.<br>
To limit scope the app has one firearm's stats hardcoded, does not calculate automatic shooting chance, as well as not including several shooting chance modifiers.

#### Features
* css optimised for portrait mobile view rather than desktop (well... optimised for chrome dev tools mobile view)
* App retains state when navigating between views
* Shows percentage chance need to score a hit on a target based on multiple inputs
* Shows recoil recovery calculated from weapon KD and user level.
