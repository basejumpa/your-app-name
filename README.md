<!--
    ###############################################################
    #
    #  This file is part of your-app-name
    #
    #  Copyright (c) 2024 Alexander Mann-Wahrenberg (basejumpa)
    #
    #      https://github.com/basejumpa
    #
    #  License(s)
    #
    #  - MIT for contents used as software
    #  - CC BY-SA-4.0 for contents used as method or otherwise
    #
    ###############################################################
-->

# The Application "your-app-name"

## Design Goal

Extensible application by modularization.
Core application shall be stable, so no minimal modification necessary when new requirements come in.


## Requirements

Req_01: The user shall be able to interact with the application by entering values and getting calculated values derived from their inputs.

Req_02: ComponentA shall have a button. When the user presses this button a value is incremented. The button label shows that value. Initial value is 19.

Req_03: ComponentB shall have a button as well. When pressed it retrieves a value from an API call and adds it to its own value which is displayed in the button label. Initial state of the own variable is 76.

Req_04: ComponentC displays the sum of the values of ComponentA und ComponentB.

Req_05: ComponentD has a button to reset the variables to their initial ones. ComponentD has no knowledge of the initial values.


## User Guide

Start Backend via

```bash
poetry run uvicorn backend.main:app --reload --port 8000
```

Start the Frontend via

```bash
npm start
```

