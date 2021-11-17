export default interface iInputFields {
  options: {
    label: string;
    instructions?: string ;
    placeholder: string;
    type: string;
    key: string;
    mode?: string;
    required?: any;
    error?: string;
  };
  state?: any;
  onChange: Function;
}
