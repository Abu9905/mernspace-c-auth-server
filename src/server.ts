function welcome(name: string) {
    console.log('Welcome to the server!' + name)

    const user = {
        name: 'abu',
    }

    const fname = user.name

    return name + fname
}

welcome('John Doe')
