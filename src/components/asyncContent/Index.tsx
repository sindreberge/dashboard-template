import React, { useEffect, useState } from "react";
import { NoContent } from "../noContent";
import { Spinner } from "../spinner";
import { Warning } from "../warning";

interface AsyncContentProps {
  isLoading: boolean;
  isEmptyResult: boolean;
  error: Error | undefined;
  children: React.ReactNode;
  loadingComponent?: React.ReactNode;
  emptyResultComponent?: React.ReactNode;
  errorComponent?: (error: Error) => React.ReactNode;
  showLoaderAfterMS?: number;
}

export const AsyncContent: React.FC<AsyncContentProps> = ({
  isLoading,
  isEmptyResult,
  error,
  children,
  loadingComponent = <Spinner />,
  emptyResultComponent = <NoContent />,
  errorComponent = (err) => <Warning message={err.message} />,
  showLoaderAfterMS = 2000,
}) => {
  const [showDelayedLoading, setShowDelayedLoading] = useState(false);

  useEffect(() => {
    let timer = 0;

    if (isLoading) {
      timer = setTimeout(() => setShowDelayedLoading(true), showLoaderAfterMS);
    } else {
      setShowDelayedLoading(false);
    }

    return () => clearTimeout(timer);
  }, [isLoading, showLoaderAfterMS]);

  if (isLoading) {
    return showDelayedLoading ? <>{loadingComponent}</> : <></>;
  }
  if (error) return <>{errorComponent(error)}</>;
  if (isEmptyResult) {
    return <>{emptyResultComponent}</>;
  }
  return <>{children}</>;
};
