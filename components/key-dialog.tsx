"use client"

import { COVALENT_API_KEY } from "@/lib/utils"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export const KeyDialog = () => {
  return (
    <AlertDialog open={!COVALENT_API_KEY}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Covalent API key not found.</AlertDialogTitle>
          <AlertDialogDescription>
            This template requires a Covalent API key. Please add your key to
            your environment variables file.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <a href="https://www.covalenthq.com/platform/auth/register/">
            <AlertDialogAction>Get API key</AlertDialogAction>
          </a>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
