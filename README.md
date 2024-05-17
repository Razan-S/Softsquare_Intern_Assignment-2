# Assignment2FormDirectivePipe

### Directive

### Attribute Directive

The attribute directive dynamically updates the image source to display the flag of the entered country in the nationality box.

### Structural Directive

The structural directive enables the display of all summarized information upon clicking the save button.

## Pipe

The pipe converts country names to ISO3166 country codes, facilitating the fetching of the appropriate flag image for the attribute directive.

## Implementation

### Directive

#### Attribute Directive

- **Functionality**: Dynamically changes the image source based on the entered country name.
- **Usage**: Updates the displayed image to show the flag of the entered country.

#### Structural Directive

- **Functionality**: Toggles the visibility of all summarized information.
- **Usage**: Shows all summarized data when the save button is clicked.

### Pipe

- **Functionality**: Converts country names to ISO3166 country codes.
- **Usage**: Utilizes the converted code in the URL of the attribute directive to fetch the corresponding flag image.