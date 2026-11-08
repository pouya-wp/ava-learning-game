#!/usr/bin/env python3
"""
Ava's Wonder World - Tablet Local Server Launcher
Run this script to serve the game on your local Wi-Fi network so your Android tablet can open it!
"""

import http.server
import socketserver
import socket
import os
import sys

PORT = 8080
DIRECTORY = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'dist')

def get_local_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        # doesn't need to be reachable
        s.connect(('8.8.8.8', 1))
        IP = s.getsockname()[0]
    except Exception:
        IP = '127.0.0.1'
    finally:
        s.close()
    return IP

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

def main():
    if not os.path.exists(DIRECTORY):
        print(f"Error: Directory '{DIRECTORY}' not found. Please run 'npm run build' first!")
        sys.exit(1)

    ip = get_local_ip()
    tablet_url = f"http://{ip}:{PORT}"

    print("=" * 65)
    print("🌸 بازی آموزشی «دنیای شگفت‌انگیز آوا» برای تبلت اندروید ۵ 🌸")
    print("=" * 65)
    print(f"\n✅ سرور محلی با موفقیت راه‌اندازی شد!")
    print(f"\n📱 لطفاً در تبلت آوا جون، مرورگر (Chrome یا مرورگر تبلت) را باز کنید")
    print(f"   و این آدرس را وارد کنید:")
    print(f"\n👉  {tablet_url}  👈\n")
    print("💡 نکته طلایی برای تبدیل به برنامه تبلت:")
    print("   در مرورگر تبلت روی ۳ نقطه بالای صفحه بزنید و گزینه")
    print("   «افزودن به صفحه اصلی» (Add to Home screen) را انتخاب کنید.")
    print("   بازی مثل یک برنامه واقعی با آیکون اختصاصی و تمام‌صفحه نصب می‌شود!")
    print("=" * 65)
    print("برای توقف سرور کلید Ctrl + C را بزنید.\n")

    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nسرور متوقف شد.")

if __name__ == '__main__':
    main()
