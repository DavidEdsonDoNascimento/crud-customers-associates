import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signForm = z.object({
  email: z.string().email()
});

type SignForm = z.infer<typeof signForm>

export const SignIn = () => {

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignForm>();

  const handleSignIn = async (data: SignForm) => {
    console.log(data.email);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Acessar painel</h1>
            <p className="text-sm text-muted-foreground">CRUD feito para um desafio de entrevista</p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <Button className="w-full" type="submit" disabled={isSubmitting}>Acessar</Button>
          </form>
        </div>
      </div>
    </>
  );
}