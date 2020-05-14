<template>
    <div class="competences-page">
        <nav
            class="alphabetic-list"
        >
            <div class="letter-group">
                <h2>Most experience</h2>
                <ol
                    type="none"
                    class="group-container"
                >
                    <li class="list-item">bla</li>
                    <li class="list-item">bla</li>
                    <li class="list-item">bla</li>
                    <li class="list-item">bla</li>
                    <li class="list-item">bla</li>
                </ol>
            </div>

            <div class="letter-group">
                <ol type="none">
                    <li class="list-item">bla</li>
                    <li class="list-item">bla</li>
                    <li class="list-item">bla</li>
                    <li class="list-item">bla</li>
                    <li class="list-item">bla</li>
                </ol>
            </div>
        </nav>

    </div>
</template>

<script>
export default {};
</script>

<style>
.competences-page {
    background-color: #1e1e1e;
    padding: 16px;
    color: white;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    box-sizing: border-box;
}

.alphabetic-list {
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    counter-reset: item;
    list-style-type: none;
}

.letter-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}

.letter-group::before {
    content: counter(item, upper-alpha) '  ';
    counter-increment: item;

    border: 2px solid #0078d7;
    height: 35px;
    width: 35px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    grid-area: left;
}

.group-container {
    padding: 0;
}

.list-item {
}
</style>