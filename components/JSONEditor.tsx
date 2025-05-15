"use client";

import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { CheckCircle, AlertTriangle, Code2, RefreshCw } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface JSONEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  readOnly?: boolean;
}

const JSONEditor: React.FC<JSONEditorProps> = ({
  value,
  onChange,
  placeholder = "Enter your JSON here...",
  className,
  readOnly = false,
}) => {
  const [isInvalidJSON, setIsInvalidJSON] = useState(false);
  const [validationMessage, setValidationMessage] = useState<string | null>(
    null
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      onChange(newValue);
      try {
        if (newValue.trim() !== "") {
          JSON.parse(newValue);
        }
        setIsInvalidJSON(false);
        setValidationMessage(null);
      } catch (error: any) {
        setIsInvalidJSON(true);
        setValidationMessage(error.message);
      }
    },
    [onChange]
  );

  const handleBeautify = () => {
    try {
      const parsed = JSON.parse(value);
      const prettyJson = JSON.stringify(parsed, null, 2);
      onChange(prettyJson);
      setIsInvalidJSON(false);
      setValidationMessage(null);
    } catch (error: any) {
      setIsInvalidJSON(true);
      setValidationMessage(error.message);
    }
  };

  const handleMinify = () => {
    try {
      const parsed = JSON.parse(value);
      const minifiedJson = JSON.stringify(parsed);
      onChange(minifiedJson);
      setIsInvalidJSON(false);
      setValidationMessage(null);
    } catch (error: any) {
      setIsInvalidJSON(true);
      setValidationMessage(error.message);
    }
  };

  const handleReset = () => {
    onChange("");
    setIsInvalidJSON(false);
    setValidationMessage(null);
  };

  return (
    <div className={cn("", className)}>
      <div className="flex justify-end gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleBeautify}
          disabled={readOnly}
          className="bg-secondary/20 text-secondary-foreground hover:bg-secondary/30 cursor-pointer"
        >
          <Code2 className="mr-2 h-4 w-4" />
          Beautify
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleMinify}
          disabled={readOnly}
          className="bg-secondary/20 text-secondary-foreground hover:bg-secondary/30 cursor-pointer"
        >
          <Code2 className="mr-2 h-4 w-4" />
          Minify
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleReset}
          disabled={readOnly}
          className="bg-destructive/20 text-destructive-foreground hover:bg-destructive/30 cursor-pointer"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>
      {isInvalidJSON && validationMessage && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Invalid JSON</AlertTitle>
          <AlertDescription>{validationMessage}</AlertDescription>
        </Alert>
      )}
      {!isInvalidJSON && value && (
        <div className="flex items-center gap-2 text-green-500">
          <CheckCircle className="h-4 w-4" />
          <span className="text-sm">Valid JSON</span>
        </div>
      )}
      <div className="mt-4">
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          style={{ fontSize: "1rem" }}
          className={cn(
            "w-full h-[25rem] font-sans bg-background border", // Replaced min/max height in px with fixed height in rem
            "resize-y",
            readOnly ? "opacity-50 cursor-not-allowed" : "",
            isInvalidJSON
              ? "border-red-500 focus:ring-red-500"
              : "focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
            className
          )}
          readOnly={readOnly}
          rows={8}
        />
      </div>
    </div>
  );
};

const JSONEditorPage = () => {
  const [jsonValue, setJsonValue] = useState<string>(
    JSON.stringify(
      {
        name: "John Doe",
        age: 30,
        isEmployed: true,
        address: {
          street: "123 Main St",
          city: "Anytown",
          zip: "12345",
        },
        hobbies: ["reading", "hiking", "coding"],
      },
      null,
      2
    ) // Initial value, prettified
  );

  const handleJSONChange = (newValue: string) => {
    setJsonValue(newValue);
  };

  return (
    <div className="mt-4 md:mt-6 lg:mt-8  border-2 border-gray-200 rounded-lg p-4">
      <div className="w-full">
        <h3>Schema Settings</h3>
        <div className="my-4">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Load Sample Schema" />
            </SelectTrigger>
            <SelectContent className="w-full">
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <JSONEditor
        value={jsonValue}
        onChange={handleJSONChange}
        placeholder="Paste your JSON here..."
        className="rounded-md"
      />
    </div>
  );
};

export default JSONEditorPage;
