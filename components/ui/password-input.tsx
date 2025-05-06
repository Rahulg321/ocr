import * as React from "react";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Input } from "./input";
export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <Input
        suffix={
          showPassword ? (
            <EyeIcon
              onClick={() => {
                setShowPassword(false);
              }}
            />
          ) : (
            <EyeOffIcon
              onClick={() => {
                setShowPassword(true);
              }}
            />
          )
        }
        type={showPassword ? "text" : "password"}
        {...props}
        ref={ref}
      />
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
