"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import SchemaFieldRow, {
  type SchemaField,
  type DataType,
} from "./schema-field-row";
import { ScrollArea } from "@/components/ui/scroll-area";

export type { SchemaField, DataType };

interface SchemaEditorProps {
  schema: SchemaField[];
  setSchema: React.Dispatch<React.SetStateAction<SchemaField[]>>;
}

export default function SchemaEditor({ schema, setSchema }: SchemaEditorProps) {
  const addField = () => {
    setSchema([
      ...schema,
      {
        id: Date.now().toString(),
        name: "",
        type: "String",
        isOptional: false,
      },
    ]);
  };

  const updateField = (id: string, updatedField: Partial<SchemaField>) => {
    setSchema(
      schema.map((field) =>
        field.id === id ? { ...field, ...updatedField } : field
      )
    );
  };

  const deleteField = (id: string) => {
    setSchema(schema.filter((field) => field.id !== id));
  };

  return (
    <div className="border rounded-md p-3 bg-white">
      <ScrollArea className="h-[280px] md:h-[360px] pr-3">
        {" "}
        {/* Added pr-3 for scrollbar space */}
        <div className="space-y-2">
          {schema.map((field, index) => (
            <SchemaFieldRow
              key={field.id}
              field={field}
              onUpdate={(updatedPart) => updateField(field.id, updatedPart)}
              onDelete={() => deleteField(field.id)}
            />
          ))}
          {schema.length === 0 && (
            <p className="text-sm text-gray-500 text-center py-4">
              No schema fields defined. Add one below.
            </p>
          )}
        </div>
      </ScrollArea>
      <Button
        variant="outline"
        className="w-full mt-3 bg-white"
        onClick={addField}
        size="sm"
      >
        <PlusCircle className="w-4 h-4 mr-2" />
        Add field
      </Button>
    </div>
  );
}
