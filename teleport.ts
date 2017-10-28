const magik = magikcraft.io;

function teleport() {
    const there = magik.memento.getItem();
    if (there) {
        magik.iaunae(there);
    } else {
        const here = magik.hic();
        magik.memento(here);
    }
}