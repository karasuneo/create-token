import { Form } from "@/types/form";
import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { postDictionary } from "./api/dictionary";

export const DictionaryForm = () => {
  const form = useForm<Form>({
    initialValues: {
      surface: "",
      pronunciation: "",
      accent_type: 0,
      //   termsOfService: false,
    },

    validate: {
      surface: (value) => (value.length < 1 ? "空白です" : null),
      pronunciation: (value) => (value.length < 1 ? "空白です" : null),
      accent_type: (value) => (isNaN(value) ? "数値を入力してください" : null),
    },
  });

  return (
    <Box mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="surface"
          placeholder=""
          {...form.getInputProps("surface")}
        />
        <TextInput
          required
          label="pronunciation"
          placeholder=""
          {...form.getInputProps("pronunciation")}
        />
        <TextInput
          required
          label="accent_type"
          placeholder=""
          {...form.getInputProps("accent_type")}
        />
        <Group position="right" mt="md">
          <Button type="submit" onSubmit={() => postDictionary(form)}>
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
};
