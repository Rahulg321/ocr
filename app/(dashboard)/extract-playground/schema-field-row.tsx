"use client";

import type React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { GripVertical, Trash2, Settings2, ChevronsUpDown } from "lucide-react";

export type DataType =
  | "String"
  | "Number"
  | "Boolean"
  | "Array"
  | "Object"
  | "Email"
  | "URL"
  | "Date";

export interface SchemaField {
  id: string;
  name: string;
  type: DataType;
  arrayItemType?: DataType;
  isOptional: boolean;
}

interface SchemaFieldRowProps {
  field: SchemaField;
  onUpdate: (updatedField: Partial<SchemaField>) => void;
  onDelete: () => void;
}

const dataTypes: DataType[] = [
  "String",
  "Number",
  "Boolean",
  "Array",
  "Object",
  "Email",
  "URL",
  "Date",
];

export default function SchemaFieldRow({
  field,
  onUpdate,
  onDelete,
}: SchemaFieldRowProps) {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ name: e.target.value });
  };

  const handleTypeChange = (value: string) => {
    const newType = value as DataType;
    if (newType === "Array" && !field.arrayItemType) {
      onUpdate({ type: newType, arrayItemType: "String" }); // Default array item type
    } else if (newType !== "Array") {
      onUpdate({ type: newType, arrayItemType: undefined });
    } else {
      onUpdate({ type: newType });
    }
  };

  const handleArrayItemTypeChange = (value: string) => {
    onUpdate({ arrayItemType: value as DataType });
  };

  const handleOptionalToggle = (checked: boolean) => {
    onUpdate({ isOptional: checked });
  };

  return (
    <div className="p-2 border rounded-md bg-white group">
      <div className="flex items-center space-x-1.5">
        <Button
          variant="ghost"
          size="sm"
          className="p-1 cursor-grab active:cursor-grabbing h-auto"
        >
          <GripVertical className="w-4 h-4 text-gray-400" />
        </Button>
        <Input
          placeholder="Field name (e.g. email)"
          value={field.name}
          onChange={handleNameChange}
          className="flex-grow h-8"
        />
        <Select value={field.type} onValueChange={handleTypeChange}>
          <SelectTrigger className="w-[120px] h-8">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            {dataTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex items-center space-x-1">
          {/* Placeholder for expand/collapse, not functional yet */}
          {field.type === "Array" && (
            <Button
              variant="ghost"
              size="sm"
              className="p-1 h-auto text-gray-500 hover:text-gray-700"
            >
              <ChevronsUpDown className="w-4 h-4" />
            </Button>
          )}
          <Switch
            checked={field.isOptional}
            onCheckedChange={handleOptionalToggle}
            aria-label="Optional field"
            className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-200"
          />
          {/* Placeholder for settings/required, not functional yet */}
          <Button
            variant="ghost"
            size="sm"
            className="p-1 h-auto text-gray-500 hover:text-gray-700"
          >
            <Settings2 className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="p-1 h-auto text-red-500 hover:text-red-700"
            onClick={onDelete}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
      {field.type === "Array" && (
        <div className="mt-1.5 pl-8 flex items-center space-x-1.5">
          <span className="text-xs text-gray-600">Array of</span>
          <Select
            value={field.arrayItemType || "String"}
            onValueChange={handleArrayItemTypeChange}
          >
            <SelectTrigger className="w-[120px] h-7">
              <SelectValue placeholder="Item type" />
            </SelectTrigger>
            <SelectContent>
              {dataTypes
                .filter((t) => t !== "Array")
                .map(
                  (
                    type // Cannot have array of arrays in this simple setup
                  ) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  )
                )}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
}
