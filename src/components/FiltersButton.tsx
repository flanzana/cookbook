"use client"
import { FunnelIcon as FilledFunnelIcon } from "@heroicons/react/20/solid"
import { FunnelIcon as EmptyFunnelIcon } from "@heroicons/react/24/outline"
import React from "react"

import useFilters from "../hooks/useFilters"
import CircledButton from "./CircledButton"

const FiltersButton = () => {
  const { areFiltersShown, hideFilters, showFilters } = useFilters()

  return (
    <CircledButton
      ariaLabel="Toggle category filters"
      ariaPressed={areFiltersShown}
      onClick={areFiltersShown ? hideFilters : showFilters}
      icon={areFiltersShown ? <FilledFunnelIcon /> : <EmptyFunnelIcon />}
    />
  )
}

export default FiltersButton
