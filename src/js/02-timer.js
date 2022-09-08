import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const datetimePickerEl = document.querySelector('input#datetime-picker');
const dataBtnStartEl = document.querySelector('button[data-start]');

// const currentDate = Date.now();
let selectedDate = null;
// let delta = null;
// let intervalId = null;
// console.log(dataBtnStartEl);
// console.log(datetimePickerEl);

dataBtnStartEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    // console.log(selectedDate);
    if (selectedDate < Date.now()) {
      alert('Please choose a date in the future');
      //   console.log(Date.now());
    } else {
      dataBtnStartEl.disabled = false;
    }

    // console.log(currentDate);
    // console.log(selectedDate);
    // console.log(delta);
  },
};

flatpickr(datetimePickerEl, options);

dataBtnStartEl.addEventListener('click', () => {
  timer.start();
});

const timer = {
  delta: null,
  intervalId: null,
  rootSelector: document.querySelector('.timer'),
  start() {
    this.intervalId = setInterval(() => {
      this.delta = selectedDate - Date.now();
      if (this.delta <= 0) {
        this.stop;
        return;
      }
      console.log(this.delta);
      const { days, hours, minutes, seconds } = this.convertMs(this.delta);
      //   console.log(days, hours, minutes, seconds);
      this.rootSelector.querySelector('[data-days]').textContent =
        this.addLeadingZero(days);
      this.rootSelector.querySelector('[data-hours]').textContent =
        this.addLeadingZero(hours);
      this.rootSelector.querySelector('[data-minutes]').textContent =
        this.addLeadingZero(minutes);
      this.rootSelector.querySelector('[data-seconds]').textContent =
        this.addLeadingZero(seconds);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
  },

  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    //   console.log({ days, hours, minutes, seconds });
    return { days, hours, minutes, seconds };
  },

  addLeadingZero(value) {
    return String(value).padStart(2, 0);
  },
};

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
