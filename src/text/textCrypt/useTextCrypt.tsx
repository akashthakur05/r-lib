import { useEffect, useState } from "react";
import { dencrypt, DencryptDefaultOptions, DencryptInitialOptions } from "./util";


export type DencryptReturnType = [string, ReturnType<typeof dencrypt>];


export function useTextCrypt(): DencryptReturnType;
export function useTextCrypt(
  initialValue: Required<DencryptInitialOptions["initialValue"]>
): DencryptReturnType;
export function useTextCrypt(
  options: DencryptDefaultOptions
): DencryptReturnType;
export function useTextCrypt(
  initialValue: Required<DencryptInitialOptions["initialValue"]>,
  options: DencryptDefaultOptions
): DencryptReturnType;
export function useTextCrypt(
  v?: string | DencryptDefaultOptions,
  o?: DencryptDefaultOptions
) {
  let initialValue = "";
  let options: DencryptDefaultOptions = {};

  if (typeof v === "object") {
    options = v;
  } else if (typeof v === "string") {
    initialValue = v;
    options = o ?? {};
  }

  const [result, setResult] = useState<string>();
  const [setValue, setSetValue] = useState<ReturnType<typeof dencrypt>>();

  useEffect(() => {
    const setValue = dencrypt({
      ...options,
      initialValue,
      callback: setResult,
    });

    setSetValue(() => setValue);
  }, []);

  return [result, setValue];
}

export { dencrypt };