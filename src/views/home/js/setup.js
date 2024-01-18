'use strict';

import { useAppStore } from "@/stores/app";

export default function setup() {
    const appStore = useAppStore()

    return { appStore }
}