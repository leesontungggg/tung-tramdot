"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { handleRegisterUser } from "@/services/user";

type Inputs = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
};

export function RegisterDialog() {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch("/api/user/register", {
      method: "post",
      body: JSON.stringify(data),
    })
      .then((response: any) => response.json())
      .then((res) => {})
      .finally(() => {
        setOpen(false);
      });
  };

  return (
    <Dialog open={open}>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Đăng Ký
      </Button>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Đăng ký</DialogTitle>
          <DialogDescription>Đăng ký liền luôn</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" className="col-span-3" {...register("email")} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              className="col-span-3"
              type="password"
              {...register("password")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="first-name" className="text-right">
              Họ
            </Label>
            <Input
              id="first-name"
              className="col-span-3"
              type="text"
              {...register("first_name")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="last-name" className="text-right">
              Tên
            </Label>
            <Input
              id="last-name"
              className="col-span-3"
              type="text"
              {...register("last_name")}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            Đăng ký
          </Button>
          <Button type="submit" onClick={() => setOpen(false)}>
            Hủy
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
