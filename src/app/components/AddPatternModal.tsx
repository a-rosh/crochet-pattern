import React from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { TextArea } from "@heroui/react";

interface AddPatternModalProps {
  onClose: () => void;
}

export const AddPatternModal: React.FC<AddPatternModalProps> = ({
  onClose,
}) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    console.log("formdata", JSON.stringify(data, null, 2));
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="absolute inset-0" onClick={onClose} />

      {/* Form Content */}
      <div className="relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#212227]">Add New Pattern</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
            {/* Pattern Name */}
            <TextField
              isRequired
              name="pattern"
              // validate={(value) => {
              //     if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              //         return "Please enter a valid email address";
              //     }
              //     return null;
              // }}
            >
              {" "}
              <Input
                className="focus:outline-none focus:ring-1 focus:ring-[#8693ab] focus:border-[#8693ab]"
                placeholder="Pattern Name"
              />
              <FieldError />
            </TextField>
            {/* Pattern */}
            <TextArea
              aria-label="Pattern in detail"
              className="h-96 w-96
                            focus:outline-none focus:ring-1 focus:ring-[#8693ab] focus:border-[#8693ab]"
              placeholder="Share the pattern step by step..."
            />
          </Form>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-[#212227] bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
          >
            Save Pattern
          </button>
        </div>
      </div>
    </div>
  );
};
