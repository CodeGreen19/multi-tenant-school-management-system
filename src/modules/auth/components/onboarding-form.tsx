"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { onboardingSchema, OnboardingSchemaType } from "../schema";
export function OnboardingForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const form = useForm<OnboardingSchemaType>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      name: "",
      slug: "",
    },
  });

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="">
          <Form {...form}>
            <form className="p-6 md:p-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-start text-center">
                  <h1 className="text-2xl font-bold">Onboarding</h1>
                  <p className="text-muted-foreground text-balance">
                    Provide info about your institution.
                  </p>
                </div>
                <div className="space-y-3">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Instition name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="eg: Modina Islamia Madrasha"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Slug</FormLabel>
                        <FormControl>
                          <Input placeholder={"eg: msm"} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                  <span className="bg-card text-muted-foreground relative z-10 px-2">
                    Or
                  </span>
                </div>
                <div className="py-4 flex items-center shadow justify-center gap-2.5  rounded-md">
                  <Image
                    src={"/google.svg"}
                    height={20}
                    width={20}
                    alt="google-svg"
                  />
                  <span className="text-muted-foreground">
                    Continute with Google
                  </span>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
