"use client"
import React from "react"
import clsx from "clsx"

import useWakeLock from "../../hooks/useWakeLock"
import { Language } from "../../types"
import getTranslation from "../../helpers/getTranslation"

type Props = {
  language: Language
}

const CookMode = ({ language }: Props) => {
  const { toggleWakeLock, isSupported, isLocked } = useWakeLock()

  if (!isSupported) return null

  return (
    <label className="mt-4 inline-flex cursor-pointer items-center">
      <input
        name="wakelock"
        type="checkbox"
        value=""
        className="peer sr-only"
        checked={isLocked}
        onChange={toggleWakeLock}
      />
      <div
        className={clsx(
          "peer relative h-6 w-11 rounded-full bg-zinc-200 dark:bg-zinc-600",
          "peer-checked:bg-primary-600 dark:peer-checked:bg-primary-300 peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:rtl:after:-translate-x-full",
          "peer-focus:ring-primary-300 peer-focus:ring-2 dark:peer-focus:ring-zinc-500",
          "after:absolute after:start-[2px] after:top-0.5 after:size-5 after:rounded-full after:border after:border-zinc-300 after:bg-white after:transition-all after:content-['']",
        )}
      />
      <span className="ms-2 text-sm font-semibold text-zinc-900 dark:text-zinc-300">
        {getTranslation("cook.mode", language)}{" "}
        <span className="text-xs font-medium">{getTranslation("keep.screen.awake", language)}</span>
      </span>
    </label>
  )
}

export default CookMode
