import './bootstrap';

import Alpine from "alpinejs";
import persist from "@alpinejs/persist";
import flatpickr from "flatpickr";
import Dropzone from "dropzone";

import "jsvectormap/dist/jsvectormap.min.css";
import "flatpickr/dist/flatpickr.min.css";
import "dropzone/dist/dropzone.css";
import "../css/tailadmin/css/style.css";

import chart01 from "./components/charts/chart-01";
import chart02 from "./components/charts/chart-02";
import chart03 from "./components/charts/chart-03";
import map01 from "./components/map-01";
import "./components/image-resize";

Alpine.plugin(persist);
window.Alpine = Alpine;
Alpine.start();

// Inisialisasi plugin JS TailAdmin
flatpickr(".datepicker", {
  mode: "range",
  static: true,
  monthSelectorType: "static",
  dateFormat: "M j, Y",
  defaultDate: [new Date().setDate(new Date().getDate() - 6), new Date()],
});

const dropzoneArea = document.querySelectorAll("#demo-upload");
if (dropzoneArea.length) {
  new Dropzone("#demo-upload", { url: "/file/post" });
}

document.addEventListener("DOMContentLoaded", () => {
  chart01();
  chart02();
  chart03();
  map01();
});
