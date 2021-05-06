describe('NamesGreeted Function', () => {
    describe('Set Values', () => {
        it('should be able to set the name to zuki', () => {
            let greetedNames = NamesGreeted()
            greetedNames.setName('Zuki')

            assert.equal('zuki', greetedNames.getName())
        });

        it('should transform Mbali to mbali', () => {
            let greetedNames = NamesGreeted()
            greetedNames.setName('Mbali')

            assert.equal('mbali', greetedNames.getName())
        });

        it('should transform SIYABONGA to siyabonga', () => {
            let greetedNames = NamesGreeted()
            greetedNames.setName('SIYABONGA')

            assert.equal('siyabonga', greetedNames.getName())
        });

        it('should be able to return the list of names greeted', () => {
            let greetedNames = NamesGreeted()
            let greetedNames2 = NamesGreeted()

            greetedNames.setName('Mbali')
            greetedNames.getName()
            greetedNames.userExists()
            greetedNames.setName('Sibulele')
            greetedNames.getName()
            greetedNames.userExists()

            greetedNames2.setName('Lumko')
            greetedNames2.getName()
            greetedNames2.userExists()
            greetedNames2.setName('Sibulele')
            greetedNames2.getName()
            greetedNames2.userExists()
            greetedNames2.setName('Sibusiso')
            greetedNames2.getName()
            greetedNames2.userExists()


            assert.deepEqual(['mbali', 'sibulele'], greetedNames.userExists())
            assert.deepEqual(['lumko', 'sibulele', 'sibusiso'], greetedNames2.userExists())

        });
        
        
        
    });
    
});
