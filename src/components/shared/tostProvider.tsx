// components/shared/ToastProviders.tsx
"use client";

import { Suspense } from "react";
import { Toaster } from "sonner";
import LoginSuccessToast from "./successToast/LoginSuccessToast";
import LogoutSuccessToast from "./successToast/LogoutSuccessToast";

const ToastContent = () => {
  return (
    <>
      <LoginSuccessToast />
      <LogoutSuccessToast />
    </>
  );
};

const ToastProviders = () => {
  return (
    <>
      <Toaster position="top-right" richColors />
      <Suspense fallback={null}>
        <ToastContent />
      </Suspense>
    </>
  );
};

export default ToastProviders;