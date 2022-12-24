player.onChat("into", function (input_chest) {
    if (query.length == 1) {
        if (query[0] == "insert") {
            if (input_chest == 1 || input_chest == 2) {
                query.push("into")
                query.push("" + input_chest)
                into_chest(input_chest)
                player.say("done insert into " + input_chest)
            } else {
                player.say("(error : input_chest is not 1 or 2.)")
            }
        } else {
            player.say("(error : not input insert.)")
        }
    } else {
        player.say("(error : length of query is 0.)")
    }
})
function where_select (num_item: number) {
    for (let index = 0; index <= output_chest_tmp.length - 1; index++) {
        if (num_item == output_chest_tmp[index]) {
            item_c.push(num_item)
        }
    }
}
function agent_drop_b () {
    item_b = []
    random = randint(15, 20)
    agent.teleport(positions.add(
    l_chest_b,
    pos(1, 2, 0)
    ), WEST)
    for (let index = 0; index < 20; index++) {
        agent.setSlot(1)
        agent.setItem(random, 1, 1)
        agent.drop(FORWARD, 1, 1)
        item_b.push(random)
        random += 1
    }
}
function make_hopper_a () {
    blocks.fill(
    STONE,
    positions.add(
    l_chest_a,
    pos(1, 0, 0)
    ),
    positions.add(
    l_chest_a,
    pos(1, 1, 0)
    ),
    FillOperation.Replace
    )
    blocks.place(HOPPER, positions.add(
    l_chest_a,
    pos(0, 1, 0)
    ))
    blocks.fill(
    GOLD_BLOCK,
    positions.add(
    l_chest_a,
    pos(-1, 0, 0)
    ),
    positions.add(
    l_chest_a,
    pos(-1, 4, 0)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    STONE,
    positions.add(
    l_chest_a,
    pos(-1, 0, -1)
    ),
    positions.add(
    l_chest_a,
    pos(1, 4, -1)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    STONE,
    positions.add(
    l_chest_a,
    pos(-1, 0, 1)
    ),
    positions.add(
    l_chest_a,
    pos(1, 4, 1)
    ),
    FillOperation.Replace
    )
}
player.onChat("insert", function () {
    if (query.length == 0) {
        query.push("insert")
        player.say("done insert")
    } else {
        player.say("(error : length of query is 0.)")
    }
})
player.onChat("select *", function () {
    if (query.length == 0) {
        query.push("select *")
        player.say("done select *")
    } else {
        player.say("(error : length of query is 0.)")
    }
})
function agent_drop_c () {
    agent.teleport(positions.add(
    output_chest_loc,
    pos(1, 2, 0)
    ), WEST)
    if (query[query.length - 2] == "from") {
        for (let index3 = 0; index3 <= output_chest_tmp.length - 1; index3++) {
            agent.setSlot(1)
            agent.setItem(output_chest_tmp[index3], 1, 1)
            agent.drop(FORWARD, 1, 1)
        }
    } else if (query[query.length - 1] == "inner join") {
        for (let index32 = 0; index32 <= output_chest_tmp.length - 1; index32++) {
            agent.setSlot(1)
            agent.setItem(output_chest_tmp[index32], 1, 1)
            agent.drop(FORWARD, 1, 1)
        }
    } else {
        for (let index4 = 0; index4 <= item_c.length - 1; index4++) {
            agent.setSlot(1)
            agent.setItem(item_c[index4], 1, 1)
            agent.drop(FORWARD, 1, 1)
        }
    }
}
player.onChat("delete", function () {
    if (query.length == 0) {
        query.push("delete")
        player.say("done delete")
    } else {
        player.say("(error : length of query is 0.)")
    }
})
function clear_array () {
    query = []
    output_chest_tmp = []
    item_c = []
    input_chest = 0
    input_item = 0
    input_item2 = 0
}
function where_delete (num_item2: number) {
    for (let index5 = 0; index5 <= output_chest_tmp.length - 1; index5++) {
        if (num_item2 != output_chest_tmp[index5]) {
            item_c.push(output_chest_tmp[index5])
        }
    }
}
player.onChat("where", function (input_item2) {
    if (query.length >= 3) {
        if (query[0] == "select *" && query[query.length - 2] == "from") {
            query.push("where")
            where_select(input_item2)
            query.push("" + input_item2)
            player.say("done select * from " + ("" + query[query.length - 3] + " ") + "where " + input_item2)
        } else if (query[0] == "delete" && query[query.length - 2] == "from") {
            query.push("where")
            where_delete(input_item2)
            query.push("" + input_item2)
            player.say("done delete from " + ("" + query[query.length - 3] + " ") + "where " + input_item2)
        } else if (query[0] == "select *" && query[query.length - 1] == "inner join") {
            query.push("where")
            where_select(input_item2)
            query.push("" + input_item2)
            player.say("done select * from " + ("" + query[query.length - 4] + " ") + "inner join " + "where " + input_item2)
        } else {
            player.say("(error : query is not select from or delete from.)")
        }
    } else {
        player.say("(error : length of query is 0.)")
    }
})
player.onChat("clear", function () {
    clear_array()
    player.say("초기화 되었습니다.")
})
player.onChat("from", function (input_chest) {
    if (query.length == 1) {
        if (query[0] == "select *") {
            if (input_chest == 1 || input_chest == 2) {
                query.push("from")
                query.push("" + input_chest)
                from_chest(input_chest)
                player.say("done select * from " + input_chest)
            } else {
                player.say("(error : input_chest is not 1 or 2.)")
            }
        } else if (query[0] == "delete") {
            if (input_chest == 1 || input_chest == 2) {
                query.push("from")
                query.push("" + input_chest)
                from_chest(input_chest)
                player.say("done delete from " + input_chest)
            } else {
                player.say("(error : input chest is not 1 or 2.)")
            }
        } else {
            player.say("(error : not input select or delete.)")
        }
    } else {
        player.say("(error : length of query is 0.)")
    }
})
player.onChat("inner join", function () {
    inner_join()
    player.say("done select * from " + ("" + query[query.length - 2] + " ") + "inner join")
})
player.onChat("values", function (input_item) {
    if (query.length == 3) {
        if (query[query.length - 2] == "into") {
            query.push("values")
            query.push("" + input_item)
            item_c.push(input_item)
            if (query[2] == "1") {
                item_a.push(input_item)
            } else {
                item_b.push(input_item)
            }
            player.say("done insert into " + ("" + query[query.length - 3] + " ") + "values " + input_item)
        } else {
            player.say("(error : query is not insert into.)")
        }
    } else {
        player.say("(error : length of query is 0.)")
    }
})
function make_hopper_c () {
    blocks.fill(
    STONE,
    positions.add(
    l_chest_c,
    pos(1, 0, 0)
    ),
    positions.add(
    l_chest_c,
    pos(1, 1, 0)
    ),
    FillOperation.Replace
    )
    blocks.place(HOPPER, positions.add(
    l_chest_c,
    pos(0, 1, 0)
    ))
    blocks.fill(
    STONE,
    positions.add(
    l_chest_c,
    pos(-1, 0, -1)
    ),
    positions.add(
    l_chest_c,
    pos(1, 4, -1)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    STONE,
    positions.add(
    l_chest_c,
    pos(-1, 0, 1)
    ),
    positions.add(
    l_chest_c,
    pos(1, 4, 1)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    STONE,
    positions.add(
    l_chest_c,
    pos(-1, 2, 0)
    ),
    positions.add(
    l_chest_c,
    pos(-1, 4, 0)
    ),
    FillOperation.Replace
    )
    item_c = []
}
player.onChat(";", function () {
    semicolon()
})
function semicolon () {
    if (query.length != 0) {
        if (query[0] == "select *" && query[1] == "from") {
            blocks.place(CHEST, output_chest_loc)
            agent_drop_c()
            player.say("유저 상자를 확인하세요.")
            clear_array()
        } else if (query[0] == "delete" && query[query.length - 2] == "where") {
            blocks.place(CHEST, output_chest_loc)
            agent_drop_c()
            if (query[2] == "1") {
                item_a = []
                item_a = item_c
            } else {
                item_b = []
                item_b = item_c
            }
            player.say("select를 사용하여 올바르게 구현되었는지 확인하세요.")
            clear_array()
        } else if (query[query.length - 2] == "values") {
            agent_drop_c()
            player.say("select를 사용하여 올바르게 구현되었는지 확인하세요.")
            clear_array()
        } else if (query[0] == "delete" && query[query.length - 2] == "from") {
            blocks.place(CHEST, output_chest_loc)
            if (query[2] == "1") {
                item_a = []
            } else {
                item_b = []
            }
            player.say("select를 사용하여 올바르게 구현되었는지 확인하세요.")
            clear_array()
        } else {
            player.say("(error : 명령어가 올바르지 않습니다.)")
        }
    } else {
        player.say("(error : length of query is 0.)")
    }
}
function make_hopper_b () {
    blocks.fill(
    STONE,
    positions.add(
    l_chest_b,
    pos(1, 0, 0)
    ),
    positions.add(
    l_chest_b,
    pos(1, 1, 0)
    ),
    FillOperation.Replace
    )
    blocks.place(HOPPER, positions.add(
    l_chest_b,
    pos(0, 1, 0)
    ))
    blocks.fill(
    GOLD_BLOCK,
    positions.add(
    l_chest_b,
    pos(-1, 0, -1)
    ),
    positions.add(
    l_chest_b,
    pos(-1, 0, 1)
    ),
    FillOperation.Replace
    )
    world_i = 0
    for (let index = 0; index < 4; index++) {
        world_i += 1
        if (world_i % 2 == 0) {
            blocks.fill(
            GOLD_BLOCK,
            positions.add(
            l_chest_b,
            pos(-1, world_i, -1)
            ),
            positions.add(
            l_chest_b,
            pos(-1, world_i, 1)
            ),
            FillOperation.Replace
            )
        } else {
            blocks.fill(
            STONE,
            positions.add(
            l_chest_b,
            pos(-1, world_i, -1)
            ),
            positions.add(
            l_chest_b,
            pos(-1, world_i, 1)
            ),
            FillOperation.Replace
            )
        }
    }
    blocks.place(GOLD_BLOCK, positions.add(
    l_chest_b,
    pos(-1, 1, -1)
    ))
    blocks.place(GOLD_BLOCK, positions.add(
    l_chest_b,
    pos(-1, 3, 1)
    ))
    blocks.fill(
    STONE,
    positions.add(
    l_chest_b,
    pos(0, 0, -1)
    ),
    positions.add(
    l_chest_b,
    pos(1, 4, -1)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    STONE,
    positions.add(
    l_chest_b,
    pos(0, 0, 1)
    ),
    positions.add(
    l_chest_b,
    pos(1, 4, 1)
    ),
    FillOperation.Replace
    )
}
function from_chest (num_chest2: number) {
    if (query[0] == "select *") {
        if (num_chest2 == 1) {
            for (let index7 = 0; index7 <= item_a.length - 1; index7++) {
                output_chest_tmp.push(item_a[index7])
            }
        } else if (num_chest2 == 2) {
            for (let index8 = 0; index8 <= item_b.length - 1; index8++) {
                output_chest_tmp.push(item_b[index8])
            }
        }
        output_chest_loc = l_chest_c
    } else if (query[0] == "delete") {
        if (num_chest2 == 1) {
            output_chest_tmp = item_a
            output_chest_loc = l_chest_a
        } else if (num_chest2 == 2) {
            output_chest_tmp = item_b
            output_chest_loc = l_chest_b
        }
    }
}
function agent_drop_a () {
    item_a = []
    random = randint(15, 20)
    agent.teleport(positions.add(
    l_chest_a,
    pos(1, 2, 0)
    ), WEST)
    agent.setSlot(1)
    for (let index = 0; index < 20; index++) {
        agent.setItem(random, 1, 1)
        agent.drop(FORWARD, 1, 1)
        item_a.push(random)
        random += 1
    }
}
function set_world () {
    player.teleport(world(0, -60, 0))
    l_chest_c = world(10, -60, 0)
    l_chest_b = world(15, -60, 10)
    l_chest_a = world(15, -60, -10)
    blocks.place(CHEST, l_chest_a)
    blocks.place(CHEST, l_chest_c)
    blocks.place(CHEST, l_chest_b)
    make_hopper_a()
    make_hopper_b()
    make_hopper_c()
    agent_drop_a()
    agent_drop_b()
    player.say("done set world")
}
function inner_join () {
    query.push("inner join")
    output_chest_tmp = []
    for (let i = 0; i <= item_a.length - 1; i++) {
        for (let j = 0; j <= item_b.length - 1; j++) {
            if (item_a[i] == item_b[j]) {
                output_chest_tmp.push(item_b[j])
            }
        }
    }
}
function into_chest (num_chest: number) {
    if (num_chest == 1) {
        output_chest_loc = l_chest_a
    } else if (num_chest == 2) {
        output_chest_loc = l_chest_b
    }
}
let world_i = 0
let l_chest_c: Position = null
let item_a: number[] = []
let input_item2 = 0
let input_item = 0
let input_chest = 0
let output_chest_loc: Position = null
let l_chest_a: Position = null
let l_chest_b: Position = null
let random = 0
let item_b: number[] = []
let item_c: number[] = []
let output_chest_tmp: number[] = []
let query: string[] = []
set_world()
query = []
