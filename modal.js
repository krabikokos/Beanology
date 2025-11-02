document.addEventListener("DOMContentLoaded",()=>{
    const openButtons = document.querySelectorAll(".open-modal");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close");

    openButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.getAttribute("data-modal");
            document.getElementById(target).style.display = "flex";
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener("click", () =>{
            btn.closest(".modal").style.display = "none";
        });
    });

    window.addEventListener("click", (e) =>{
        if (e.target.classList.contains("modal")) {
            e.target.style.display = "none";
        }
    });
});