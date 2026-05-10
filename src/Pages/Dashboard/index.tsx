
import { useState } from 'react'
import PropertyFilter from './PropertyFilter'
import { Box } from '@mui/material'
import PropertyListing from './PropertyListing'
import PropertyBanner from './PropertyBanner'
import PropertyTabs from './PropertyTabs'

const index = () => {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list')

  return (
    <Box>
      <PropertyFilter viewMode={viewMode} setViewMode={setViewMode} />
      <PropertyListing viewMode={viewMode} setViewMode={setViewMode} />
      <PropertyBanner />
      <PropertyTabs />
    </Box>
  )
}

export default index