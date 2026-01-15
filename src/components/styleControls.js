/**
 * Style control sliders for adjusting table appearance
 * Manages dynamic CSS injection for user-configurable styling
 */

// Style control configuration
const styleControls = {
    cellPaddingH: { element: 'td', prop: 'padding-left', suffix: 'px', valueDisplay: 'cellPaddingHValue', also: 'padding-right' },
    cellPaddingV: { element: 'td', prop: 'padding-top', suffix: 'px', valueDisplay: 'cellPaddingVValue', also: 'padding-bottom' },
    headerFont: { element: 'th', prop: 'font-size', suffix: 'px', valueDisplay: 'headerFontValue' },
    noteFont: { element: 'td', prop: 'font-size', suffix: 'px', valueDisplay: 'noteFontValue' },
    rowLabelFont: { element: 'td:first-child', prop: 'font-size', suffix: 'px', valueDisplay: 'rowLabelFontValue' },
    firstColPadding: { element: 'td:first-child', prop: 'padding-left', suffix: 'px', valueDisplay: 'firstColPaddingValue', alsoSelector: 'th:first-child' },
    containerWidth: { element: '.table-container', prop: 'max-width', suffix: 'px', valueDisplay: 'containerWidthValue', additionalProps: { 'margin': '30px auto 0' } }
};

// Get or create style element for dynamic updates
let dynamicStyle = document.getElementById('dynamic-styles');
if (!dynamicStyle) {
    dynamicStyle = document.createElement('style');
    dynamicStyle.id = 'dynamic-styles';
    document.head.appendChild(dynamicStyle);
}

/**
 * Update a style control value and rebuild CSS rules
 * @param {string} controlId - ID of the control being updated
 * @param {string|number} value - New value for the control
 */
function updateStyle(controlId, value) {
    const control = styleControls[controlId];
    const displayElement = document.getElementById(control.valueDisplay);
    displayElement.textContent = value + control.suffix;

    // Build CSS rule
    let rules = [];

    if (control.also) {
        rules.push(`${control.element} { ${control.prop}: ${value}${control.suffix}; ${control.also}: ${value}${control.suffix}; }`);
    } else {
        rules.push(`${control.element} { ${control.prop}: ${value}${control.suffix}; }`);
    }

    if (control.alsoSelector) {
        rules.push(`${control.alsoSelector} { ${control.prop}: ${value}${control.suffix}; }`);
    }

    // Update or add rules to dynamic stylesheet
    const ruleText = rules.join('\n');
    const existingRuleIndex = Array.from(dynamicStyle.sheet.cssRules).findIndex(rule =>
        rule.selectorText === control.element || (control.alsoSelector && rule.selectorText === control.alsoSelector)
    );

    // Clear and rebuild all rules
    while (dynamicStyle.sheet.cssRules.length > 0) {
        dynamicStyle.sheet.deleteRule(0);
    }

    // Rebuild all current styles
    Object.keys(styleControls).forEach(id => {
        const ctrl = styleControls[id];
        const slider = document.getElementById(id);
        const val = slider.value;

        let cssProps = `${ctrl.prop}: ${val}${ctrl.suffix};`;
        if (ctrl.also) {
            cssProps += ` ${ctrl.also}: ${val}${ctrl.suffix};`;
        }
        if (ctrl.additionalProps) {
            Object.entries(ctrl.additionalProps).forEach(([prop, value]) => {
                cssProps += ` ${prop}: ${value};`;
            });
        }

        dynamicStyle.sheet.insertRule(`${ctrl.element} { ${cssProps} }`, dynamicStyle.sheet.cssRules.length);

        if (ctrl.alsoSelector) {
            dynamicStyle.sheet.insertRule(`${ctrl.alsoSelector} { ${ctrl.prop}: ${val}${ctrl.suffix}; }`, dynamicStyle.sheet.cssRules.length);
        }
    });
}

/**
 * Initialize style control sliders and event listeners
 * Call this once on page load
 */
export function initializeStyleControls() {
    Object.keys(styleControls).forEach(controlId => {
        const slider = document.getElementById(controlId);
        slider.addEventListener('input', (e) => {
            updateStyle(controlId, e.target.value);
        });
        // Initialize with current value
        updateStyle(controlId, slider.value);
    });
}
