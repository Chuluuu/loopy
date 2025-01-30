import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
    DialogFooter
  } from "@/components/ui/dialog"
import { Button } from './ui/button'
const DialogUi = () => {
  return (
    <div>
        <div>
            <Dialog open={true}>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                    
                    <DialogFooter className="flex justify-end gap-2 mt-4">          
                        <Button className="btn-primary">
                        Ok
                        </Button>
                        <DialogClose >
                        Close
                    </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    </div>
  )
}

export default DialogUi