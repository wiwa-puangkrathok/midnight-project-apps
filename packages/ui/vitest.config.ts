import { defineConfig, mergeConfig } from "vitest/config"
import reactConfig from "@workspace/vitest-config/react"

export default mergeConfig(reactConfig, defineConfig({}))
