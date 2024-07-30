import type { ButtonHTMLAttributes, LabelHTMLAttributes } from "react";

function Button({
  value = "click",
  className,
  type = "button",
}: ButtonHTMLAttributes<string>) {
  return (
    <button type={type} className={`button ${className}`}>
      {value}
    </button>
  );
}

function Tutorial() {
  return (
    <details
      className="landscape-feature text-white open:absolute open:border-2 open:border-beige
        open:bg-black sm:open:left-[calc(50%-7em)] sm:open:right-[calc(50%-7em)]"
    >
      <summary> To Move, type: 'L', 'M', or 'R'</summary>
      <p className="p-2 text-base leading-6">
        You can write the Mars Rover some instructions, and trasmit them over
        NASA's Deep Space Network. <br />
        Bear in mind, Mars is 225 million km away. So you can't contact the
        rover it in real-time. <br />
        Also, NASA want to save money on their electricity bill by keeping
        instructions as small as possible. Please limit your instructions to
        three characters - "M" "L" and "R". <br />
        E.g. "MMLLRR" = "MOVE-MOVE-LEFT-LEFT-RIGHT-RIGHT"
      </p>
    </details>
  );
}

function Input({ id, className }: { id: string; className: string }) {
  return (
    <input
      title="Instructions must 1 to 30 characters long, consisting only of the letters 'L' 'M' & 'R'. "
      pattern="^[LMR]{1,30}$"
      required={true}
      type="text"
      name="instructions"
      className={`input ${className}`}
      id={id}
    ></input>
  );
}

function Label({ className, htmlFor, children }: LabelHTMLAttributes<string>) {
  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default function Controls({
  className,
  updateInstruction,
}: {
  className: string;
  updateInstruction: (arg0: string) => void;
}) {
  function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      instructions: { value: string; focus: () => void };
      reset: () => void;
    };
    let { value } = target.instructions;
    if (/[LMR]{1,30}$/.test(value)) {
      updateInstruction(value);
    } else {
      alert(
        "Instructions must 1 to 30 characters long, consisting only of the letters 'L' 'M' & 'R",
      );
    }
    target.reset();
    target.instructions.focus();
  }

  return (
    <form
      action="/"
      method="post"
      className={`instruction-form ${className}`}
      onSubmit={submitHandler}
    >
      <Label className="label col-span-2 text-white" htmlFor="instructions">
        <Tutorial></Tutorial>
      </Label>
      <Input
        className={"my-2 w-[100%] leading-snug"}
        id={"instructions"}
      ></Input>
      <Button
        className={`text-m m-1 h-min rounded bg-white px-1 leading-snug shadow-lg hover:bg-beige
          hover:shadow-none focus:bg-beige focus:shadow-none`}
        type={"submit"}
        value={"Send"}
      ></Button>
    </form>
  );
}
