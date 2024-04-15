import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import {signupInput, signinInput } from "@ded_codes/medium-common"

export const userRouter  = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

userRouter.post("/signup", async (c) => {
    const body = await c.req.json();
  
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const {success} = signupInput.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({
        message: "Inputs Not Correct"
      })
    }

    try {
      const user = await prisma.user.create({
        data: {
          username: body.username,
          password: body.password,
        }
      })
  
      const jwt = await sign({id: user.id}, c.env.JWT_SECRET)
  
      return c.json({
        token: jwt
      })
    } catch (e) {
      c.status(411)
      return c.text("User already exits with this email")
    }
  });
  
  userRouter.post("/signin", async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();

    const {success} = signinInput.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({
        message: "Inputs Not Correct"
      })
    }
  
    try {
      const user = await prisma.user.findFirst({
        where : {
          username: body.username,
          password: body.password
        }
      })
  
      if(!user){
        c.status(403) // 403 Status Code for Unauthorisation
        return c.text("Incorrect Credentials")
      }
  
      const jwt =  await sign({id: user.id}, c.env.JWT_SECRET)
      return c.text(jwt)
  
    } catch (e) {
      c.status(411)
      return c.text("Inside Catch")
    }
  });
  


