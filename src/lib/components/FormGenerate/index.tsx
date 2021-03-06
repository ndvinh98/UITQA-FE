// @ts-nocheck
import React, { memo, forwardRef, useImperativeHandle } from "react";
import { HTMLChakraProps } from "@chakra-ui/system";
import { useForm } from "react-hook-form";
import FormControl, { IFormControl } from "./FormControl";
import { yupResolver } from "@hookform/resolvers/yup";
import * as UI from "@chakra-ui/react";
import * as yup from "yup";

export interface IFormGenerate extends HTMLChakraProps<any> {
  onSubmit?: (values: any) => void;
  fields?: IFormControl[];
  schema?: any;
  children?: React.ReactNode;
  gap?: number;
  watchFields?: string | string[];
  display?: "grid" | "stack";
  styled?: any;
  defaultWatchValue?: any;
  defaultValues?: any;
  onChangeValue?: (
    dataForm: any,
    filedChange: { name: string; value: any }
  ) => void;
}

const FormGenerate = (props: IFormGenerate, ref?: any) => {
  const {
    onSubmit,
    children,
    fields,
    schema,
    gap = 4,
    onChangeValue,
    display = "grid",
    styled,
    defaultWatchValue,
    defaultValues,
    ...other
  } = props;

  const {
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    reset,
    watch,
    control,
  } = useForm({
    resolver: yupResolver(yup.object(schema).required()),
    defaultValues,
  });

  useImperativeHandle(ref, () => ({
    handleSubmit,
    getValues,
    setValue,
    reset: handleReset,
    watch,
    control,
  }));

  const handleReset = (props: any) => {
    reset(props, { keepValues: false });
  };

  React.useEffect(() => {
    const subscription = watch(onChangeValue, defaultWatchValue);
    return () => subscription?.unsubscribe?.();
  }, [watch]);

  return (
    <UI.Box as={"form"} w={"full"} onSubmit={handleSubmit(onSubmit)} {...other}>
      {display === "grid" && (
        <UI.Grid templateColumns="repeat(12, 1fr)" gap={gap}>
          {fields?.map?.((x, i) => (
            <UI.GridItem sx={x?.colStyled} colSpan={x?.colSpan || 12} key={i}>
              <FormControl
                {...x}
                defaultValue={x?.defaultValue}
                error={errors?.[x.name]}
                control={control}
              />
            </UI.GridItem>
          ))}
        </UI.Grid>
      )}
      {display === "stack" && (
        <UI.Stack spacing={gap} {...styled}>
          {fields?.map?.((x, i) => (
            <FormControl
              key={i}
              {...x}
              defaultValue={x?.defaultValue}
              error={errors?.[x.name]}
              control={control}
            />
          ))}
        </UI.Stack>
      )}

      {children}
    </UI.Box>
  );
};

export default memo(forwardRef(FormGenerate));
