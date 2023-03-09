const app = Vue.createApp({
    data() {
      return {
        bang_price: 120000,
        bang_quantity: 0,
        prime_price: 700000,
        prime_quantity: 0,
      }
    },
    computed: {
      bang_total() {
        return this.bang_price * this.bang_quantity
      },
      prime_total() {
        return this.prime_price * this.prime_quantity
      },
      total() {
        return this.prime_total + this.bang_total
      },
      formattedtotal() {
        return this.total.toLocaleString()
      }
    },
    methods: {
      subtract_bang() {
        if (this.bang_quantity == 0) {
          this.bang_quantity += 0
        }
        else {
          this.bang_quantity--
        }
      },
      subtract_prime() {
        if (this.prime_quantity == 0) {
          this.prime_quantity += 0
        }
        else {
          this.prime_quantity--
        }
      },
      send() {
        // Replace the following variables with your own values
        const phoneNumber = "1234567890"; // Phone number in international format (without '+' or '00')
        let message = "";
        if (this.bang_quantity > 0 && this.prime_quantity > 0) {
            message += `I Want ${this.bang_quantity} Bang And ${this.prime_quantity} Prime`
        }
        else if (this.bang_quantity > 0) {
          message += `I Want ${this.bang_quantity} Bang`;
        }
        else if (this.prime_quantity > 0) {
            message += `I Want ${this.prime_quantity} Prime`;
        }
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url);
      }
    }
  });
  
  app.mount("#app");
  