                const themeToggle = document.getElementById('themeToggle');
                const mobileThemeToggle = document.getElementById('mobileThemeToggle');
                const html = document.documentElement;
                const icon = document.getElementById('icon');
                const scrollIndicator = document.getElementById('scroll-indicator');
                const mobileMenuButton = document.getElementById('mobileMenuButton');
                const mobileMenu = document.getElementById('mobileMenu');

                function toggleTheme() {
                    const isDark = html.classList.toggle('dark');
                    localStorage.setItem('theme', isDark ? 'dark' : 'light');
                    
                    if (isDark) {
                        // Cambiar a ícono de luna
                        icon.innerHTML = `
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"></path>
                        `;
                        localStorage.setItem('icon', 'moon');
                    } else {
                        // Cambiar a ícono de sol con rayos
                        icon.innerHTML = `
                        <path d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"></path>
                        <path d="M12 1v2"></path>
                        <path d="M12 21v2"></path>
                        <path d="M4.22 4.22l1.42 1.42"></path>
                        <path d="M18.36 18.36l1.42 1.42"></path>
                        <path d="M1 12h2"></path>
                        <path d="M21 12h2"></path>
                        <path d="M4.22 19.78l1.42-1.42"></path>
                        <path d="M18.36 5.64l1.42-1.42"></path>
                        `;
                        localStorage.setItem('icon', 'sun');
                    }
                }

                // Theme toggle functionality
                themeToggle.addEventListener('click', toggleTheme);
                mobileThemeToggle.addEventListener('click', toggleTheme);

                // Check for saved theme and icon preference
                const savedTheme = localStorage.getItem('theme');
                const savedIcon = localStorage.getItem('icon');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                    html.classList.add('dark');
                }

                // Apply saved icon
                if (savedIcon === 'moon') {
                    icon.innerHTML = `
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"></path>
                    `;
                } else {
                    icon.innerHTML = `
                    <path d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"></path>
                    <path d="M12 1v2"></path>
                    <path d="M12 21v2"></path>
                    <path d="M4.22 4.22l1.42 1.42"></path>
                    <path d="M18.36 18.36l1.42 1.42"></path>
                    <path d="M1 12h2"></path>
                    <path d="M21 12h2"></path>
                    <path d="M4.22 19.78l1.42-1.42"></path>
                    <path d="M18.36 5.64l1.42-1.42"></path>
                    `;
                }


                // Mobile menu toggle
                mobileMenuButton.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                });

                // Smooth scrolling for anchor links with scroll animation
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function (e) {
                        e.preventDefault();

                        const targetId = this.getAttribute('href').substring(1);
                        const targetElement = document.getElementById(targetId);

                        if (targetElement) {
                            targetElement.scrollIntoView({
                                behavior: 'smooth'
                            });
                            // Close mobile menu when a link is clicked
                            mobileMenu.classList.add('hidden');
                        }
                    });
                });

                // Scroll indicator
                window.addEventListener('scroll', () => {
                    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    const scrolled = (winScroll / height) * 100;
                    scrollIndicator.style.width = scrolled + '%';
                });

                // Intersection Observer for scroll animations
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('slide-in');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });

                document.querySelectorAll('section').forEach(section => {
                    observer.observe(section);
                });
                // Typing animation
                function typeText(element, text, speed) {
                    let i = 0;
                    element.innerHTML = '';
                    function type() {
                        if (i < text.length) {
                            element.innerHTML += text.charAt(i);
                            i++;
                            setTimeout(type, speed);
                        }
                    }
                    type();
                }

                typeText(typingText, "Bringing your ideas to life: I'm passionate about combining beautiful design with solid functionality to create apps that truly resonate with users. I work to make every project not only look great, but also perform flawlessly, delivering a fluid experience focused on what really matters.", 50);