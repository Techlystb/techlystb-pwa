# techlystb-pwa
🔄 কিভাবে Fork করে নিজের সাইটে ব্যবহার করবেন 👉 আপনি যদি এই PWA Install Button সিস্টেমটি নিজের Blogger সাইটে ব্যবহার করতে চান, তাহলে নিচের ধাপগুলো অনুসরণ করুন—

✅ Step‑by‑Step

1️⃣ এই রিপো Fork করুন উপরে ডানদিকে Fork বাটন চাপুন আপনার নিজের GitHub অ্যাকাউন্টে রিপো কপি হয়ে যাবে ।

2️⃣ Fork করা Repo-তে GitHub Pages Enable করুন আপনার Fork করা রিপোতে যান

⚙️ Settings → Pages → Source: Deploy from branch (main branch সিলেক্ট করুন) → Save

✅ সেভ করার পর আপনার নতুন URL হবে এমন:
https://<আপনার-username>.github.io/<fork-kora-repo>/

3️⃣ manifest.json এর URL কপি করুন আপনার GitHub Pages এর manifest link হবে এমন:

perl Copy code
https://<আপনার-username>.github.io/<fork-kora-repo>/manifest.json

4️⃣ Blogger Theme-এ Manifest Link বসান 👉 Blogger Dashboard → Theme → Edit HTML → <head> ট্যাগের মধ্যে নিচের লাইনটি দিন (আপনার নিজের URL দিয়ে):
<link rel="manifest" href="https://<আপনার-username>.github.io/<fork-kora-repo>/manifest.json"> <meta name="theme-color" content="#007bff">

5️⃣ Install Button, CSS এবং Script কোড যোগ করুন 👉 README‑এর উপরের অংশে দেওয়া Step 1–3 অনুসারে CSS, HTML এবং Script আপনার Blogger Theme‑এ বসিয়ে দিন।

6️⃣ সেভ করুন এবং সাইট টেস্ট করুন মোবাইল থেকে আপনার Blogger সাইট ওপেন করুন → 👉 Install Button দেখতে পাবেন 👉 ক্লিক করলে Install Prompt আসবে ✅

✨ Enjoy! এভাবেই Fork করা এই রিপো থেকে যেকোনো Blogger সাইটে PWA Install System ব্যবহার করতে পারবেন। আপনি চাইলে manifest.json বা icon, screenshots নিজের মতো করে কাস্টমাইজ করতে পারেন ।

💡 Helpful হলে অবশ্যই ⭐ Star দিন! আর কোনো প্রশ্ন থাকলে জানাবেন 🚀🔥

✨ Demo 👉 Live Blog: <button class="install-app-btn" id="installBtn" style="display:none;">
  <svg viewBox="0 0 24 24">
    <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-7 2h14v2H5z"/>
  </svg>
  Install App
</button>

https://techlystb.blogspot.com/p/blogs.html

















