import React from "react";

interface InputField {
  placeHolder: string;
  type: string;
  value: string;
  onChange: (event: any) => any;
}

const Input = (props: InputField) => {
  return (
    <div className="border rounded-lg input-borders h-11 flex items-center gap-2 py-6 px-4 w-fit">
      <input type={props.type} onChange={props.onChange} value={props.value} />
    </div>
  );
};

export default Input;
