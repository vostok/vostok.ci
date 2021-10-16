﻿import * as github from "@actions/github";
import os from "os";
import * as path from "path"

export function getTestsCacheKey() {
    return `${github.context.repo.owner}.${github.context.repo.repo}-${os.platform()}-${process.env.GITHUB_RUN_ID}-${process.env.GITHUB_RUN_ATTEMPT}`;
}

export function getTestsCachePaths() {
    return ["**", path.resolve("../vostok.devtools/")];
}