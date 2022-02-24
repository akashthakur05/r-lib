import * as React from 'react'
/**
 * A hook that change title of the page 
 * 
 * @param title Title to set for the page 
 */
const useDocumentTitle = (title: string):void => {
  React.useEffect(() => {
    document.title = title
  }, [title])
}

export  {useDocumentTitle}