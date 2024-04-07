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

import { useCounterStore } from "@/providers/counter-store-provider";

type Inputs = {
  email: string;
  password: string;
};

export function LoginDialog() {
  const [open, setOpen] = useState(false);

  const { count, incrementCount, decrementCount, setAccessToken, setUser } =
    useCounterStore((state) => state);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch(`/api/user/login`, {
      method: "post",
      body: JSON.stringify(data),
    })
      .then((response: any) => response.json())
      .then(async (res) => {
        if (res.data.data.access_token) {
          setAccessToken(res.data.data.access_token);

          const user = await fetch(
            `/api/user/me?apikey=${res.data.data.access_token}`,
            {
              method: "get",
            }
          );

          const userData = await user.json();

          if (userData.data.data) {
            setUser(userData.data.data);
          }
        }
      })
      .finally(() => {
        setOpen(false);
      });
  };

  return (
    <Dialog open={open}>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Đăng Nhập
      </Button>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Đăng Nhập</DialogTitle>
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
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            Đăng nhập
          </Button>
          <Button type="submit" onClick={() => setOpen(false)}>
            Hủy
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
