import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

interface CustomTextAreaProps {
  name: string;
  control: any;
  type?: string;
  label: string;
  rows?: number;
}

export function CustomTextArea({
  name,
  control,
  type,
  label,
  rows,
}: CustomTextAreaProps) {
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Textarea placeholder={label} {...field} rows={rows} />
            </FormControl>
            {/* <FormDescription>
                You can <span>@mention</span> other users and organizations.
              </FormDescription> */}
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
