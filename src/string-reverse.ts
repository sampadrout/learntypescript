function stringreverse(orgstr: string): void {
    let originalstring: string = orgstr;
    let reverstring:string = "";
    for (let i = originalstring.length - 1; i >= 0; i--) {
        reverstring += originalstring[i];
    }
    console.log(reverstring);
}

stringreverse("hello");