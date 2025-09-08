export async function wait(num: number) {
  await new Promise((res) => setTimeout(res, num));
}

type MessageKey =
  | "auth.signup.success"
  | "org.signup.success"
  | "auth.signup.failed"
  | "auth.login.success"
  | "auth.login.failed"
  | "create.success"
  | "create.failed"
  | "update.success"
  | "update.failed"
  | "delete.success"
  | "delete.failed"
  | "fetch.success"
  | "fetch.failed"
  | "error.validation"
  | "error.server";

const messages: Record<MessageKey, string> = {
  "auth.signup.success": "Signed up successfully",
  "auth.signup.failed": "Signup failed",
  "auth.login.success": "Logged in successfully",
  "auth.login.failed": "Invalid credentials",
  "org.signup.success": "Signed up successfully",
  "create.success": "Created successfully",
  "create.failed": "Failed to create",
  "update.success": "Updated successfully",
  "update.failed": "Failed to update",
  "delete.success": "Deleted successfully",
  "delete.failed": "Failed to delete",
  "fetch.success": "Fetched successfully",
  "fetch.failed": "Failed to fetch data",
  "error.validation": "Validation failed",
  "error.server": "Internal server error",
};

export function getMessage(key: MessageKey): { message: string } {
  return { message: messages[key] };
}
