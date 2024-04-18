import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface CustomTextFieldProps {
  name: string;
  control: any;
  type?: string;
  label: string;
}

export function CustomTextField({
  name,
  control,
  type,
  label,
}: CustomTextFieldProps) {
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input placeholder={label} {...field} type={type} />
            </FormControl>
            {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
