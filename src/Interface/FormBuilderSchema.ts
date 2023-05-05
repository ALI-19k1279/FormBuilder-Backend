export interface FormComponent {
    type: string;
    label: string;
    key: string;
    size: string;
    block: boolean;
    action: string;
    disableOnInvalid: boolean;
    theme: string;
    input: boolean;
    placeholder: string;
    prefix: string;
    customClass: string;
    suffix: string;
    multiple: boolean;
    defaultValue: any;
    protected: boolean;
    unique: boolean;
    persistent: boolean;
    hidden: boolean;
    clearOnHide: boolean;
    refreshOn: string;
    redrawOn: string;
    tableView: boolean;
    modalEdit: boolean;
    dataGridLabel: boolean;
    labelPosition: string;
    description: string;
    errorLabel: string;
    tooltip: string;
    hideLabel: boolean;
    tabindex: string;
    disabled: boolean;
    autofocus: boolean;
    dbIndex: boolean;
    customDefaultValue: string;
    calculateValue: string;
    calculateServer: boolean;
    widget: { type: string };
    attributes: any;
    validateOn: string;
    validate: {
      required: boolean;
      custom: string;
      customPrivate: boolean;
      strictDateValidation: boolean;
      multiple: boolean;
      unique: boolean;
    };
    conditional: {
      show: any;
      when: any;
      eq: any;
    };
    overlay: {
      style: string;
      left: string;
      top: string;
      width: string;
      height: string;
    };
    allowCalculateOverride: boolean;
    encrypted: boolean;
    showCharCount: boolean;
    showWordCount: boolean;
    properties: any;
    allowMultipleMasks: boolean;
    addons: any[];
    leftIcon: string;
    rightIcon: string;
    id: string;
  }
  